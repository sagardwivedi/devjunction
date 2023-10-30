import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import LinkInput from "./LinkInput";

const LinksForm = () => {
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
          <Button variant={"outline"} className="w-full">
            Add new link
          </Button>
        </div>
        <ScrollArea className="h-[420px]">
          <LinkInput id={1} link="" />
          <LinkInput id={2} link="" />
          <LinkInput id={3} link="" />
        </ScrollArea>
      </div>
      <div className="mt-5 flex justify-end border-t">
        <Button className="mt-5">Save</Button>
      </div>
    </div>
  );
};

export default LinksForm;
