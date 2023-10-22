import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { ChangeEvent } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

import { LinkInput, useLinkStore } from "@/hooks/useLinkForm";
import { PlatformOptions } from "../data/data";

const LinkInput = ({ id, link, platform }: LinkInput) => {
  const { removeLinkInput, updateLinkInput, moveDown, moveUp } = useLinkStore();
  const disabledPlatforms = useLinkStore((state) =>
    state.getPlatformsForDisable(state)
  );

  const handleLinkChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateLinkInput(id, { link: e.target.value });
  };

  const handlePlatformChange = (e: ChangeEvent<HTMLSelectElement>) => {
    updateLinkInput(id, { platform: e.target.value });
  };

  return (
    <div className="space-y-5 rounded-lg  bg-gray-50 px-2 py-4">
      <div className="flex flex-row justify-between">
        <div className="space-x-3">
          <span>Link #{id}</span>
          <Button
            onClick={() => moveUp(id)}
            size="sm"
            radius="full"
            isIconOnly
            variant="ghost"
          >
            <BsArrowUp />
          </Button>
          <Button
            onClick={() => moveDown(id)}
            size="sm"
            radius="full"
            isIconOnly
            variant="ghost"
          >
            <BsArrowDown />
          </Button>
        </div>
        <Button onClick={() => removeLinkInput(id)} variant="ghost">
          Remove
        </Button>
      </div>
      <div>
        <Select
          label="Platform"
          labelPlacement="outside"
          radius="sm"
          placeholder="Select a platform"
          variant="bordered"
          onChange={handlePlatformChange}
          classNames={{
            trigger: "bg-white",
          }}
          popoverProps={{
            classNames: {
              base: "p-0 border-small border-divider bg-background",
            },
          }}
          items={PlatformOptions}
          renderValue={(items) => {
            return items.map((item) => (
              <div key={item.key} className="flex flex-row gap-2">
                <div>{item.data && <item.data.logo size={20} />}</div>
                <div>{item.data?.platform}</div>
              </div>
            ));
          }}
          disabledKeys={disabledPlatforms}
        >
          {(PlatformOptions) => (
            <SelectItem key={PlatformOptions.platform}>
              <div></div>
            </SelectItem>
          )}
        </Select>
      </div>
      <div>
        <Input
          label="Link"
          labelPlacement="outside"
          placeholder="Enter your platform link"
          variant="bordered"
          radius="sm"
          value={link}
          onChange={handleLinkChange}
        />
      </div>
    </div>
  );
};

export default LinkInput;
