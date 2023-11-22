import { DevLinksLogo } from "@/components/DevLinksLogo";
import { ClinetTab } from "./tabs/ClinetTab";
import { PreviewButton } from "@/components/butons";

export function EditorHeader({ id, tab }: { id: string; tab: string }) {
  return (
    <div className="flex flex-row items-center justify-between rounded-lg bg-white px-5 py-4">
      <DevLinksLogo />
      <ClinetTab tab={tab} />
      <PreviewButton id={id} />
    </div>
  );
}
