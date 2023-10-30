import { EyeOpenIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import DevLinksLogo from "@/components/DevLinksLogo";
import Tabs from "@/components/Editor/Tab/Tab";
import { Button } from "@/components/ui/button";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full space-y-5 p-5">
      <header className="flex flex-row items-center justify-between rounded-lg bg-neutral-900 px-3 py-5 shadow-sm">
        <DevLinksLogo />
        <Tabs />
        <Link href={`/${"sagar"}/preview`}>
          <Button
            variant={"outline"}
            className="md:h-10 md:rounded-md md:px-8 h-9 max-md:w-9"
          >
            <EyeOpenIcon className="w-5 h-5 md:hidden" />
            <p className="hidden md:block">Preview</p>
          </Button>
        </Link>
      </header>
      <section className="h-full">{children}</section>
    </main>
  );
}
