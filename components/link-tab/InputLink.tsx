import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";

export function InputLink({
  id,
  onRemove,
  errorLink,
  errorPlatform,
}: {
  id: number;
  onRemove: (id: number) => void;
  errorLink?: string;
  errorPlatform?: string;
}) {
  return (
    <div className="mb-4 rounded-md bg-slate-800 p-4 shadow-md">
      <input type="hidden" name="Id" value={id} />
      <div className="mb-4 flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-semibold">Link #{id}</p>
          <button
            type="button"
            disabled={id === 1}
            className={`${
              id === 1 ? "cursor-not-allowed" : ""
            } rounded-md p-2 text-white`}
          >
            <ArrowUpIcon className="h-5 w-5" />
          </button>
          <button
            disabled={id === 1}
            type="button"
            className={`${
              id === 1 ? "cursor-not-allowed" : ""
            } rounded-md p-2 text-white`}
          >
            <ArrowDownIcon className="h-5 w-5" />
          </button>
        </div>
        <button onClick={() => onRemove(id)}>Remove</button>
      </div>
      <div className="mb-4 space-y-2">
        <div>
          <label
            htmlFor="platform"
            className="block font-semibold text-gray-700"
          >
            Platform
          </label>
          <select
            name="Platform"
            id="platform"
            className="w-full rounded-md bg-transparent p-2"
          >
            <option value="github">Github</option>
            {/* Add more platform options as needed */}
          </select>
          <p>{errorPlatform}</p>
        </div>
        <div>
          <label htmlFor={`link`} className="block font-semibold text-gray-700">
            Link
          </label>
          <input
            type="url"
            name="Link"
            id={`link`}
            placeholder="Platform link"
            className={`w-full rounded-md bg-transparent p-2 ${
              errorLink ? "border-red-500" : ""
            }`}
          />
          <p className="text-sm text-red-500">{errorLink}</p>
        </div>
      </div>
    </div>
  );
}
