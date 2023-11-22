import { LinkIcon } from "@heroicons/react/20/solid";

function Input({ id }: { id: number }) {
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
          className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
        />
        <LinkIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
    </div>
  );
}

function Select({ id }: { id: number }) {
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
        className="peer block w-full cursor-pointer rounded-md border border-gray-200 text-sm outline-2 placeholder:text-gray-500"
        defaultValue=""
      >
        <option value="" disabled>
          Select a platform
        </option>
      </select>
    </div>
  );
}

export function Inputs({ id }: { id: number }) {
  return (
    <div className="space-y-2 rounded-md bg-gray-50 p-3">
      <div className="flex flex-row items-center justify-between">
        <p className="text-sm font-bold text-gray-500">Link #{id}</p>
        <button
          type="button"
          className="font-semibold text-neutral-500 hover:text-neutral-800"
        >
          Remove
        </button>
      </div>
      <div className="space-y-2">
        <Select id={id} />
        <Input id={id} />
      </div>
    </div>
  );
}
