import { useLinkInputStore } from "@/hooks/useLinkForm";
import { Button } from "@nextui-org/button";
import LinkInput from "./LinkInput";

const LinksForm = () => {
  const { addLinkInput, linkInputs } = useLinkInputStore();

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
        <div className="will-change-scroll space-y-5 overflow-y-auto h-[420px] scrollbar-hide">
          {linkInputs.map((link) => (
            <div key={link.id}>
              <LinkInput {...link} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <Button>Save</Button>
      </div>
    </div>
  );
};

export default LinksForm;
