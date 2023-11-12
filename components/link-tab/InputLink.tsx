import { RemoveButton } from "../butons";

export function InputLink({
  id,
  errorLink,
  errorPlatform,
}: {
  id: number;
  errorLink?: string;
  errorPlatform?: string;
}) {
  return (
    <div className="mb-4 rounded-md bg-gray-50 p-4">
      <input type="hidden" name="Id" value={id} />
      <div className="mb-4 flex flex-row items-center justify-between">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-semibold">Link #{id}</p>
        </div>
        <RemoveButton id={id} />
      </div>
      <div className="mb-4 bg-gray-100 p-2 rounded-md space-y-2">
        <div>
          <label
            htmlFor={`platform-${id}`}
            className="block font-semibold text-gray-700"
          >
            Platform
          </label>
          <select
            name={`Platform-${id}`}
            id={`platform-${id}`}
            className="w-full rounded-md bg-transparent p-2"
          >
            <option value="Github">Github</option>
            <option value="Stack Overflow">Stack Overflow</option>
          </select>
          <p>{errorPlatform}</p>
        </div>

        <div>
          <label
            htmlFor={`link-${id}`}
            className="block font-semibold text-gray-700"
          >
            Link
          </label>
          <input
            type="url"
            name={`Link-${id}`}
            id={`link-${id}`}
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
