import { DevLinksLogo } from "@/components/DevLinksLogo";
import { PreviewButton } from "./preview-button";
import { ClinetTab } from "./tabs/ClinetTab";

export function EditorHeader({ id, tab }: { id: string; tab: string }) {
  return (
    <div className="flex flex-row items-center justify-between rounded-lg border border-gray-700 bg-neutral-900 px-5 py-4">
      <DevLinksLogo />
      <ClinetTab tab={tab} />
      <PreviewButton id={id} />
    </div>
  );
}
