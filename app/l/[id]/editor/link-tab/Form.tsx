"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { useFormState, useFormStatus } from "react-dom";

import { saveLinks } from "@/lib/actions/crudAction";
import { Inputs } from "./Input";

export function Form() {
  const [state, dispatch] = useFormState(saveLinks, undefined);

  return (
    <div className="mt-8 space-y-3">
      <button className="flex w-full items-center justify-center rounded-md border py-2">
        <PlusIcon className="h-5 w-5" />
        <p>Add new link</p>
      </button>
      <form action={dispatch} className="space-y-5">
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <Inputs key={index} id={index + 1} />
          ))}
        </div>
        <div className="flex justify-end pt-5 border-t border-gray-500">
          <SaveButton />
        </div>
      </form>
    </div>
  );
}

export function SaveButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      className="bg-black disabled:bg-gray-500 text-white px-5 py-2 rounded-md"
      disabled={pending}
      aria-disabled={pending}
    >
      Save
    </button>
  );
}
