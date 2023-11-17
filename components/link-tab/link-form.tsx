"use client";

import { PlusIcon } from "@heroicons/react/20/solid";
import { useFormState } from "react-dom";

import { useMultipleInput } from "@/hooks/use-multiple-input";
import { linksSaveAction } from "@/lib/actions/crudAction";
import { SaveButton } from "../butons";
import { InputLink } from "./InputLink";

export function LinkForm() {
  const [state, action] = useFormState(linksSaveAction, null);

  const { addInputField, inputFields: links } = useMultipleInput();

  return (
    <div>
      <button
        onClick={addInputField}
        className="my-5 flex w-full flex-row items-center justify-center gap-x-2 rounded-md border border-black py-2 active:bg-black active:text-white"
      >
        <PlusIcon className="h-6 w-6" />
        Add new link
      </button>
      <form action={action}>
        <div className="h-[400px] overflow-y-auto will-change-scroll">
          {links.map((item) => {
            const linkError = state?.errors?.[item.id - 1]?.[0];
            const platformError = state?.errors?.[item.id - 1]?.[1];

            return (
              <InputLink
                key={item.id}
                {...item}
                errorLink={linkError}
                errorPlatform={platformError}
              />
            );
          })}
        </div>

        <SaveButton />
      </form>
    </div>
  );
}
