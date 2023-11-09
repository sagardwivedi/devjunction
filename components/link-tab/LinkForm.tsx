"use client";

import { PlusIcon } from "@heroicons/react/20/solid";
import { useFormState, useFormStatus } from "react-dom";

import { useMultipleInput } from "@/hooks/use-multiple-input";
import { linksSaveAction } from "@/lib/actions/crudAction";
import { InputLink } from "./InputLink";

export function LinkForm() {
  const initialState = { errors: {}, message: null };
  const [state, action] = useFormState(linksSaveAction, initialState);

  const { inputFields, removeInputField, addInputField } = useMultipleInput([
    { id: 1, link: "", platform: "" },
    { id: 2, link: "", platform: "" },
  ]);

  return (
    <div className="px-10 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-xl font-semibold md:text-6xl">
            Customize your links
          </h1>
          <p className="mt-4 text-base">
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>
        </div>
        <button
          onClick={addInputField}
          className="flex w-full flex-row items-center justify-center gap-x-2 rounded-md border border-gray-100 py-2"
        >
          <PlusIcon className="h-6 w-6" />
          Add new link
        </button>

        <form action={action}>
          <div className="h-[400px] overflow-y-auto will-change-scroll">
            {inputFields.map((item) => {
              return (
                <>
                  <InputLink
                    id={item.id}
                    key={item.id}
                    onRemove={removeInputField}
                  />
                </>
              );
            })}
          </div>

          <SaveButton />
        </form>
      </div>
    </div>
  );
}

function SaveButton() {
  const { pending } = useFormStatus();

  return (
    <div className="mt-5 flex justify-end border-t border-white pt-5">
      <button
        className="rounded-md bg-white px-5 py-2 text-black"
        disabled={pending}
      >
        Save
      </button>
    </div>
  );
}
