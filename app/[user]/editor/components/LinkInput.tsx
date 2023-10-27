import { BsArrowDown, BsArrowUp } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

function RemoveButton({ id }: { id: number }) {
  return <Button variant="ghost">Remove</Button>;
}

function MovinButtons({ id }: { id: number }) {
  return (
    <>
      <Button variant="ghost" size="sm">
        <BsArrowUp />
      </Button>
      <Button variant="ghost" size="sm">
        <BsArrowDown />
      </Button>
    </>
  );
}

function InputLink({ id, link }: { id: number; link: string }) {
  return <Input type="url" placeholder="Enter link" value={link} />;
}

function SelectPlatform({ id }: { id: number }) {
  return <Select></Select>;
}

export default function LinkInput({ id, link }: { id: number; link: string }) {
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
