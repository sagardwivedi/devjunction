import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { BsArrowDown, BsArrowUp, BsLink } from "react-icons/bs";

import { LinkInput, useLinkStore } from "@/hooks/useLinkForm";
import { PlatformOptions as options } from "../data/data";

function RemoveButton({ id }: { id: number }) {
  const { removeInput } = useLinkStore();

  return (
    <Button variant="light" radius="sm" onClick={() => removeInput(id)}>
      Remove
    </Button>
  );
}

function MovinButtons({ id }: { id: number }) {
  const { moveDown, moveUp } = useLinkStore();
  return (
    <>
      <Button
        onClick={() => moveUp(id)}
        isIconOnly
        radius="full"
        variant="light"
        size="sm"
      >
        <BsArrowUp />
      </Button>
      <Button
        onClick={() => moveDown(id)}
        isIconOnly
        radius="full"
        variant="light"
        size="sm"
      >
        <BsArrowDown />
      </Button>
    </>
  );
}

function InputLink({ id, link }: { id: number; link: string }) {
  const { updateInput } = useLinkStore();

  return (
    <Input
      type="url"
      label="Link"
      labelPlacement="outside"
      placeholder="Enter link"
      variant="bordered"
      radius="sm"
      isClearable
      classNames={{ label: "text-neutral-800", inputWrapper: "bg-white" }}
      value={link}
      onChange={(e) => updateInput(id, { link: e.target.value })}
      startContent={<BsLink className="-rotate-45 text-gray-500" size={20} />}
    />
  );
}

function SelectPlatform({ id }: { id: number }) {
  const { updateInput } = useLinkStore();
  const disabled = useLinkStore((state) => state.getUniquePlatforms(state));
  return (
    <Select
      radius="sm"
      label="Platform"
      labelPlacement="outside"
      placeholder="Select platform"
      variant="bordered"
      classNames={{
        trigger: "bg-white",
        popover: "border-small bg-background border-divider p-0",
        listbox: "max-h-[200px]",
        label: "text-neutral-900",
      }}
      listboxProps={{
        itemClasses: {
          base: "hover:bg-gray-200",
        },
      }}
      items={options}
      renderValue={(items) => {
        return items.map((item) => (
          <div key={item.key} className="flex flex-row gap-2">
            {item.data && (
              <item.data.logo size={20} className="text-gray-500" />
            )}
            <p>{item.data?.platform}</p>
          </div>
        ));
      }}
      onChange={(e) => updateInput(id, { platform: e.target.value })}
      disabledKeys={disabled}
    >
      {(options) => (
        <SelectItem
          key={options.platform}
          startContent={<options.logo size={20} className="mr-2" />}
          textValue={options.platform}
        >
          {options.platform}
        </SelectItem>
      )}
    </Select>
  );
}

export default function LinkInput({ id, link }: LinkInput) {
  return (
    <div className="rounded-sm bg-neutral-50">
      <div className="space-y-4 p-3">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-x-1">
            <div className="font-bold text-neutral-950">Link #{id}</div>
            <MovinButtons id={id} />
          </div>
          <RemoveButton id={id} />
        </div>
        <SelectPlatform id={id} />
        <InputLink id={id} link={link} />
      </div>
    </div>
  );
}
