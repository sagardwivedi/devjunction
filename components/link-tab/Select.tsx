export function Select({
  id,
  errorPlatform,
  platform,
}: {
  id?: number;
  platform?: string;
  errorPlatform?: string;
}) {
  return (
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
        defaultValue={platform}
      >
        <option value="Github">Github</option>
        <option value="Stack Overflow">Stack Overflow</option>
      </select>
      <p>{errorPlatform}</p>
    </div>
  );
}
