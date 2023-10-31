import { EyeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import DevLinksLogo from "@/components/DevLinksLogo";
import LinksForm from "@/components/Editor/LinkTab/LinksForm";
import ProfileTab from "@/components/Editor/ProfileTab/ProfileTab";
import ShowContent from "@/components/Editor/ShowContent";
import Tabs from "@/components/Editor/Tab/Tab";
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
          <Button
            variant={"outline"}
            className="h-10 rounded-md"
          >
            <EyeOpenIcon className="md:w-6 md:h-6 sm:w-5 sm:h-5 w-4 h-4 md:hidden" />
            <p className="hidden md:block">Preview</p>
          </Button>
        </Link>
      </header>
      <div className="flex h-full flex-row items-center gap-5">
        <div className="h-[720px] w-[40%] rounded-lg bg-neutral-900 shadow max-lg:hidden">
          <ShowContent />
        </div>
        <div className="md:h-[720px] flex-1 rounded-lg animate-in bg-neutral-900 shadow">
          {tab === "link" ? <LinksForm /> : <ProfileTab />}
        </div>
      </div>
    </main>
  );
}
