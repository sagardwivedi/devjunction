'use client';

import { ArrowPathIcon } from '@heroicons/react/20/solid';
import { EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useFormStatus } from 'react-dom';

export function SaveButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="rounded-md bg-black px-5 py-2 text-white disabled:bg-gray-500"
      disabled={pending}
      aria-disabled={pending}
    >
      Save
    </button>
  );
}

export function AuthFormButton({ text }: { text: string }) {
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

export function PreviewButton({ id }: { id: string }) {
  return (
    <Link
      className="block rounded-md border border-black px-4 py-2 transition-colors hover:bg-gray-100 hover:text-black"
      href={`/l/${id}`}
    >
      <EyeIcon className="h-5 w-5 md:hidden" />
      <p className="max-md:hidden">Preview</p>
    </Link>
  );
}
