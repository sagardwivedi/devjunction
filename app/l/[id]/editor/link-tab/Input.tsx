'use client';

import { useMultipleInput } from '@/hooks/use-multiple-input';
import { PlatformField } from '@/types/definition';
import { LinkIcon } from '@heroicons/react/20/solid';
import { DeleteForm } from './delete-form';

function Input({
  id,
  error,
  value,
}: {
  id: number;
  value: string;
  error?: string;
}) {
  const { updateInputField } = useMultipleInput();
  return (
    <div>
      <label
        htmlFor={`link-${id}`}
        className="mb-2 block text-sm text-gray-600"
      >
        Link
      </label>
      <div className="relative">
        <input
          type="url"
          name={`Link-${id}`}
          id={`link-${id}`}
          value={value}
          onChange={(e) => updateInputField(id, { link: e.target.value })}
          className={`block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500 ${
            error ? 'border-red-500' : ''
          }`}
        />
        <LinkIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
      <div>
        {error ? <p className="text-sm text-red-500">{error}</p> : null}
      </div>
    </div>
  );
}

function Select({
  id,
  platforms,
  error,
  value,
}: {
  id: number;
  platforms: PlatformField[];
  value: string;
  error?: string;
}) {
  const { updateInputField } = useMultipleInput();
  return (
    <div>
      <label
        htmlFor={`platform-${id}`}
        className="mb-2 block text-sm text-gray-600"
      >
        Platform
      </label>
      <select
        name={`Platform-${id}`}
        id={`platform-${id}`}
        className={`peer block w-full cursor-pointer rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500 ${
          error ? 'border-red-500' : ''
        }`}
        value={value}
        onChange={(e) => updateInputField(id, { platform: e.target.value })}
      >
        <option value="" disabled>
          Select a platform
        </option>
        {platforms.map((plat) => (
          <option key={plat.id} value={plat.name}>
            {plat.name}
          </option>
        ))}
      </select>
      <div>
        {error ? <p className="text-sm text-red-500">{error}</p> : null}
      </div>
    </div>
  );
}

export function Inputs({
  id,
  link,
  platform,
  platformOptions,
  linkError,
  platformError,
}: {
  id: number;
  link: string;
  platform: string;
  platformOptions: PlatformField[];
  linkError?: string;
  platformError?: string;
}) {
  return (
    <div className="space-y-2 rounded-md bg-gray-50 p-3">
      <div className="flex flex-row items-center justify-between">
        <p className="text-sm font-bold text-gray-500">Link #{id}</p>
        <DeleteForm id={id} />
      </div>
      <div className="space-y-2">
        <input type="hidden" name="ID" value={id} />
        <Select
          id={id}
          platforms={platformOptions}
          error={platformError}
          value={platform}
        />
        <Input id={id} error={linkError} value={link} />
      </div>
    </div>
  );
}
