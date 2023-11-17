import { RemoveButton } from "../butons";
import { Input } from "./Input";
import { Select } from "./Select";

export function InputLink({
  id,
  errorLink,
  errorPlatform,
  link,
  platform,
}: {
  id: number;
  link: string;
  platform: string;
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
      <div className="mb-4 space-y-2 rounded-md bg-gray-100 p-2">
        <Select id={id} errorPlatform={errorPlatform} platform={platform} />
        <Input id={id} errorLink={errorLink} link={link} />
      </div>
    </div>
  );
}
