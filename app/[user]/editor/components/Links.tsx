import { Button } from "@nextui-org/button";

import { useLinkStore } from "@/hooks/useLinkForm";
import LinkInput from "./LinkInput";

const LinksForm = () => {
  const { addLinkInput, linkInputs } = useLinkStore();

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
          <Button
            onClick={addLinkInput}
            variant="bordered"
            radius="sm"
            fullWidth
          >
            Add new link
          </Button>
        </div>
        <div className="h-[420px] space-y-5 overflow-y-auto will-change-scroll scrollbar-hide">
          {linkInputs.map((link) => (
            <div key={link.id}>
              <LinkInput {...link} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex justify-end">
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default LinksForm;
