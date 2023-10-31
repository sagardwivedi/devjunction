"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLinkStore } from "@/hooks/useLinkStore";
import LinkInput from "./LinkInput";

export default function LinksForm() {
  const { addLink, linkInputs } = useLinkStore();

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
          <Button onClick={addLink} variant={"outline"} className="w-full">
            Add new link
          </Button>
        </div>

        <ScrollArea className="h-[420px]">
          {linkInputs.map((item) => (
            <LinkInput key={item.id} id={item.id} link={item.link} />
          ))}
        </ScrollArea>
        <div className="mt-5 flex justify-end border-t">
          <SaveButton />
        </div>
      </div>
    </div>
  );
}

function SaveButton() {
  return (
    <Button className="mt-5" variant={"secondary"}>
      Save
    </Button>
  );
}
