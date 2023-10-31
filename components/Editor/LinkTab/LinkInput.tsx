import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLinkStore } from "@/hooks/useLinkStore";
import { PlatformOptions } from "@/lib/placeholder";

function RemoveButton({ id }: { id: number }) {
  const { removeLink } = useLinkStore();
  return (
    <Button className="text-sm md:text-base" onClick={() => removeLink(id)} variant="ghost">
      Remove
    </Button>
  );
}

function MovinButtons({ id }: { id: number }) {
  const { moveLink } = useLinkStore();
  return (
    <>
      <Button
        onClick={() => moveLink(id, "up")}
        variant="ghost"
        className="rounded-full"
        size={"icon"}
      >
        <ArrowUpIcon />
      </Button>
      <Button
        onClick={() => moveLink(id, "down")}
        variant="ghost"
        className="rounded-full"
        size={"icon"}
      >
        <ArrowDownIcon />
      </Button>
    </>
  );
}

function InputLink({ link, id }: { id: number; link: string }) {
  const { updateLink } = useLinkStore();
  return (
    <>
      <Label htmlFor={`link-${id}`}>Link</Label>
      <Input
        type="url"
        placeholder="Enter link"
        id={`link-${id}`}
        name="Link"
        value={link}
        onChange={(e) => updateLink(id, "link", e.target.value)}
      />
    </>
  );
}

function SelectPlatform({ id }: { id: number }) {
  const { updateLink } = useLinkStore();
  return (
    <>
      <Label>Platform</Label>
      <Select
        name="Platform"
        onValueChange={(e) => updateLink(id, "platform", e)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a platform" />
        </SelectTrigger>
        <SelectContent>
          {PlatformOptions.map((item) => (
            <SelectItem key={item.id} value={item.platform}>
              <div className="flex flex-row items-center gap-x-2">
                <item.logo />
                <p>{item.platform}</p>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}

export default function LinkInput({ id, link }: { id: number; link: string }) {
  return (
    <div className={"bg-neutral-800 rounded-lg mt-5"}>
      <div className="space-y-4 p-2 md:p-4 rounded-md">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-x-1">
            <div className="font-bold md:text-base text-sm">Link #{id}</div>
            <MovinButtons id={id} />
          </div>
          <RemoveButton id={id} />
        </div>
        <div className="bg-neutral-950 rounded-md p-2 md:p-4 space-y-4">
          <div className="space-y-2">
            <SelectPlatform id={id} />
          </div>
          <div className="space-y-2">
            <InputLink id={id} link={link} />
          </div>
        </div>
      </div>
    </div>
  );
}
