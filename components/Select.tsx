import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Icon, Root, Trigger, Value } from "@radix-ui/react-select";

export function Select() {
  return (
    <Root>
      <Trigger
        aria-label="Platform"
        className="inline-flex justify-between w-full border border-white p-2 rounded-md items-center"
      >
        <Value placeholder="Select a platform" />
        <Icon>
          <ChevronDownIcon className="w-5 h-5" />
        </Icon>
      </Trigger>
    </Root>
  );
}
