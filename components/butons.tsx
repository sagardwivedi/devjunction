"use client";

import {
  ArrowDownIcon,
  ArrowPathIcon,
  ArrowUpIcon,
} from "@heroicons/react/20/solid";
import { useFormStatus } from "react-dom";

import { useMultipleInput } from "@/hooks/use-multiple-input";

export function MoveButton({ id }: { id: number }) {
  const { moveInputField } = useMultipleInput();
  return (
    <>
      <button type="button" onClick={() => moveInputField(id, "up")}>
        <ArrowUpIcon className="h-5 w-5" />
      </button>
      <button type="button" onClick={() => moveInputField(id, "down")}>
        <ArrowDownIcon className="h-5 w-5" />
      </button>
    </>
  );
}

export function RemoveButton({ id }: { id: number }) {
  const { removeInputField } = useMultipleInput();
  return (
    <button type="button" onClick={() => removeInputField(id)}>
      Remove
    </button>
  );
}

export function SaveButton() {
  const { pending } = useFormStatus();

  return (
    <div className="flex justify-end border-t border-gray-500 pt-5">
      <button
        className="rounded-md bg-black px-5 py-2 text-white"
        disabled={pending}
      >
        Save
      </button>
    </div>
  );
}

export function AuthFormButton({text}:{text: string}) {
  const { pending } = useFormStatus();
  return (
    <button
      aria-disabled={pending}
      disabled={pending}
      className="flex w-full items-center justify-center gap-x-2 rounded-lg  bg-white p-2 text-black transition-all hover:bg-white hover:text-black active:opacity-50"
    >
      {pending ? <ArrowPathIcon className="h-5 w-5 animate-spin" /> : null}
      {text}
    </button>
  );
}
