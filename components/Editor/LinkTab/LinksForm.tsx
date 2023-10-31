"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLinkFormStore } from "@/hooks/useLinkStore";
import { LinkComponent } from "./LinkInput";

export default function LinksForm() {
  const { addComponent, components } = useLinkFormStore();

  return (
    <div className="md:px-8 px-4 py-6 md:py-12">
      <div className="space-y-5">
        <div className="space-y-5">
          <div className="space-y-3">
            <h1 className="md:text-4xl text-2xl font-bold">
              Customize your links
            </h1>
            <p>
              Add/edit/remove links below and then share all your profiles with
              he world.
            </p>
          </div>
          <Button onClick={addComponent} variant={"outline"} className="w-full">
            Add new link
          </Button>
        </div>
        <ScrollArea className="h-[26rem]">
          {components.map((item) => (
            <LinkComponent key={item.id} {...item} />
          ))}
        </ScrollArea>
        <div className="mt-5 flex justify-end border-t">
          <Button className="mt-5" variant={"secondary"}>
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
