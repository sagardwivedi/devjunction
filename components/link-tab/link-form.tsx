"use client";

import { PlusIcon } from "@heroicons/react/20/solid";
import { useFormState } from "react-dom";

import { useMultipleInput } from "@/hooks/use-multiple-input";
import { linksSaveAction } from "@/lib/actions/crudAction";
import { SaveButton } from "../butons";
import { InputLink } from "./InputLink";
import { Link } from "@/types/definition";

export function LinkForm({ social }: { social: Link[] | null }) {
  const [state, action] = useFormState(linksSaveAction, null);

  const { inputFields, addInputField } = useMultipleInput([
    { id: 1, link: "", platform: "" },
  ]);

  return (
    <div>
      <button
        onClick={addInputField}
        className="flex w-full flex-row items-center justify-center gap-x-2 rounded-md border border-black active:bg-black active:text-white py-2"
      >
        <PlusIcon className="h-6 w-6" />
        Add new link
      </button>
      <form action={action}>
        <div className="h-[400px] overflow-y-auto will-change-scroll">
          {inputFields.map((item) => {
            const linkError = state?.errors?.[item.id - 1]?.[0];
            const platformError = state?.errors?.[item.id - 1]?.[1];

            return (
              <InputLink
                id={item.id}
                key={item.id}
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
