import { EyeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import DevLinksLogo from "@/components/DevLinksLogo";
import Tabs from "@/components/Editor/Tab/Tab";
import { TabContent } from "@/components/Editor/Tab/TabContent";
import { Button } from "@/components/ui/button";

export default function Editor({
  searchParams,
}: {
  searchParams: { tab?: string };
}) {
  const tab = searchParams?.tab || "link";

  return (
    <main className="h-full space-y-5 p-5">
      <header className="flex flex-row items-center justify-between rounded-lg bg-neutral-900 px-3 py-5 shadow-sm">
        <DevLinksLogo />
        <Tabs />
        <Link href={`/${"sagar"}/preview`}>
          <Button variant={"outline"} className="h-10 rounded-md">
            <EyeOpenIcon className="md:w-6 md:h-6 sm:w-5 sm:h-5 w-4 h-4 md:hidden" />
            <p className="hidden md:block">Preview</p>
          </Button>
        </Link>
      </header>
      <TabContent tab={tab} />
    </main>
  );
}
