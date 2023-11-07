import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/20/solid";

export function InputLink({
  id,
  onRemove,
}: {
  id: number;
  onRemove: (id: number) => void;
}) {
  return (
    <div className="mb-4 rounded-md bg-slate-800 p-4 shadow-md">
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
        <button
          onClick={() => onRemove(id)}
          className="rounded-md bg-red-500 p-2 text-white hover:bg-red-600"
        >
          Remove
        </button>
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
        </div>
        <div>
          <label htmlFor={`link`} className="block font-semibold text-gray-700">
            Link
          </label>
          <input
            type="url"
            name={`Link`}
            id={`link`}
            placeholder="Platform link"
            className="w-full rounded-md bg-transparent p-2"
          />
        </div>
      </div>
    </div>
  );
}
