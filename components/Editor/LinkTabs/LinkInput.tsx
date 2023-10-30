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
import { PlatformOptions } from "@/lib/placeholder";
import { cn } from "@/lib/utils";

function RemoveButton({ id }: { id: number }) {
  return <Button variant="ghost">Remove</Button>;
}

function MovinButtons({ id }: { id: number }) {
  return (
    <>
      <Button variant="ghost" size="icon" className="rounded-full">
        <ArrowUpIcon />
      </Button>
      <Button variant="ghost" size="icon" className="rounded-full">
        <ArrowDownIcon />
      </Button>
    </>
  );
}

function InputLink({ id, link }: { id: number; link: string }) {
  return <Input type="url" placeholder="Enter link" value={link} />;
}

function SelectPlatform({ id }: { id: number }) {
  return (
    <Select>
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
  );
}

export default function LinkInput({ id, link }: { id: number; link: string }) {
  return (
    <div className={cn(id !== 1 ? "mt-5" : "")}>
      <div className="space-y-4 p-4 bg-neutral-950 rounded-md">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-x-1">
            <div className="font-bold">Link #{id}</div>
            <MovinButtons id={id} />
          </div>
          <RemoveButton id={id} />
        </div>
        <div className="space-y-2">
          <Label>Platform</Label>
          <SelectPlatform id={id} />
        </div>
        <div className="space-y-2">
          <Label>Link</Label>
          <InputLink id={id} link={link} />
        </div>
      </div>
    </div>
  );
}
