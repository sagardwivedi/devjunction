import { LinkInputProps, useLinkInputStore } from "@/hooks/useLinkForm";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { ChangeEvent } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const LinkInput = ({ id, linkURL, platform }: LinkInputProps) => {
  const { moveLinkInput, removeLinkInput, updateLinkURL, updatePlatform } =
    useLinkInputStore();

  const handleLinkURLChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    updateLinkURL(id, newValue);
  };

  const handlePlatformChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value;
    updatePlatform(id, newValue);
  };

  return (
    <div className="space-y-5 bg-gray-50 rounded-lg px-2 py-4">
      <div className="flex flex-row justify-between">
        <div className="space-x-3">
          <span>Link #{id}</span>
          <Button
            onClick={() => moveLinkInput(id, "up")}
            size="sm"
            radius="full"
            isIconOnly
            variant="ghost"
          >
            <BsArrowUp />
          </Button>
          <Button
            onClick={() => moveLinkInput(id, "down")}
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
          value={platform}
          onChange={handlePlatformChange}
          id="platform"
          name="platform"
        >
          <SelectItem key={1} value={1}>
            1
          </SelectItem>
        </Select>
      </div>
      <div>
        <Input
          label="Link"
          labelPlacement="outside"
          placeholder="Enter your platform link"
          variant="bordered"
          radius="sm"
          value={linkURL}
          onChange={handleLinkURLChange}
        />
      </div>
    </div>
  );
};

export default LinkInput;
