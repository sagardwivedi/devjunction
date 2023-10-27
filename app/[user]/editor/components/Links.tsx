import LinkInput from "./LinkInput";
import { Button } from "@/components/ui/button";

const LinksForm = () => {
  return (
    <div className="px-8 py-12">
      <div className="space-y-5">
        <div className="space-y-5">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold text-neutral-800 ">
              Customize your links
            </h1>
            <p>
              Add/edit/remove links below and then share all your profiles with
              he world.
            </p>
          </div>
          <Button>Add new link</Button>
        </div>
        <div className="scrollbar-hide h-[420px] space-y-5 overflow-y-auto rounded-md will-change-scroll"></div>
      </div>
      <div className="mt-5 flex justify-end border-t">
        <Button className="mt-5">Save</Button>
      </div>
    </div>
  );
};

export default LinksForm;
