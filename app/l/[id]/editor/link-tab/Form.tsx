'use client';

import { PlusIcon } from '@heroicons/react/24/outline';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';

import { SaveButton } from '@/components/butons';
import { useMultipleInput } from '@/hooks/use-multiple-input';
import { saveLinks } from '@/lib/actions/crudAction';
import { Link, PlatformField } from '@/types/definition';
import { Inputs } from './Input';

export function Form({
  platforms,
  social,
}: {
  platforms: PlatformField[];
  social: Link[];
}) {
  const initialState = { message: '', errors: [] };
  const [state, dispatch] = useFormState(saveLinks, initialState);
  const { addInputField, inputFields, setInputFields } = useMultipleInput();

  useEffect(() => {
    const checkSocial = social.length > 0;

    if (checkSocial) {
      setInputFields(social);
    }
  }, [social, setInputFields]);

  return (
    <div className="mt-8 space-y-3">
      <button
        onClick={addInputField}
        className="flex w-full items-center justify-center rounded-md border py-2"
      >
        <PlusIcon className="h-5 w-5" />
        <p>Add new link</p>
      </button>
      <form action={dispatch} className="space-y-5">
        <div className="space-y-4">
          {inputFields.map((field) => {
            const error = state?.errors?.find((e) => e.id === field.id);
            return (
              <Inputs
                key={field.id}
                {...field}
                linkError={error?.link}
                platformError={error?.platform}
                platformOptions={platforms}
              />
            );
          })}
        </div>
        <div className="flex items-center justify-between border-t border-gray-500 pl-2 pt-5">
          <div>{state?.message ? <p>{state.message}</p> : null}</div>
          <SaveButton />
        </div>
      </form>
    </div>
  );
}
