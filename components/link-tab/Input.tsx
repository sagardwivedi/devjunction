export function Input({
  id,
  errorLink,
  link,
}: {
  id: number;
  link: string;
  errorLink?: string;
}) {
  return (
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
        defaultValue={link}
      />
      <p className="text-sm text-red-500">{errorLink}</p>
    </div>
  );
}
