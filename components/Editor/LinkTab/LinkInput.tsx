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
import { LinkComponent, useLinkFormStore } from "@/hooks/useLinkStore";
import { PlatformOptions } from "@/lib/placeholder";
import { cn } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";

function RemoveButton({ id }: { id: number }) {
  const { removeComponent } = useLinkFormStore();

  const handleRemoveClick = () => {
    removeComponent(id);
  };

  return (
    <Button
      className="text-sm md:text-base"
      onClick={handleRemoveClick}
      variant="ghost"
    >
      Remove
    </Button>
  );
}

function MoveButton({ id }: { id: number }) {
  const { moveComponent, components } = useLinkFormStore();

  const currentIndex = components.findIndex((c) => c.id === id);
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === components.length - 1;

  const handleMoveUpClick = () => {
    if (!isFirst) {
      moveComponent(id, "up");
    }
  };

  const handleMoveDownClick = () => {
    if (!isLast) {
      moveComponent(id, "down");
    }
  };

  return (
    <div className="space-x-2">
      <Button
        variant={"outline"}
        onClick={handleMoveUpClick}
        className={cn("rounded-full", isFirst ? "cursor-not-allowed" : "")}
        disabled={isFirst}
        size={"icon"}
      >
        <ArrowUpIcon />
      </Button>
      <Button
        variant={"outline"}
        onClick={handleMoveDownClick}
        className={cn("rounded-full", isLast ? "cursor-not-allowed" : "")}
        disabled={isLast}
        size={"icon"}
      >
        <ArrowDownIcon />
      </Button>
    </div>
  );
}

export function LinkComponent({ id, inputValue, selectValue }: LinkComponent) {
  const { updateComponent } = useLinkFormStore();
  return (
    <div className="bg-neutral-800 rounded-lg mt-5">
      <div className="space-y-4 p-2 md:p-4 rounded-md">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center gap-x-2">
            <div className="font-bold md:text-base text-sm">Link #{id}</div>
            <MoveButton id={id} />
          </div>
          <RemoveButton id={id} />
        </div>
        <div className="bg-neutral-950 rounded-md p-2 md:p-4 space-y-4">
          <div className="space-y-2">
            <Label>Platform</Label>
            <Select
              name="Platform"
              value={selectValue}
              onValueChange={(e) => updateComponent(id, { selectValue: e })}
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
          </div>
          <div className="space-y-2">
            <Label htmlFor={`link-${id}`}>Link</Label>
            <Input
              type="url"
              placeholder="Enter link"
              id={`link-${id}`}
              name="Link"
              value={inputValue}
              onChange={(e) =>
                updateComponent(id, { inputValue: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
