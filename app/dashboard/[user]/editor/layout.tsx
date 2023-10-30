import Link from "next/link";
import Tab from "../../../../components/Editor/Tab/Tab";
import { Button } from "@/components/ui/button";
import { Link1Icon } from "@radix-ui/react-icons";
import DevLinksLogo from "@/components/DevLinksLogo";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full space-y-5 p-5">
      <header className="flex flex-row items-center justify-between rounded-lg bg-neutral-900 px-3 py-5 shadow-sm">
        <DevLinksLogo />
        <Tab />
        <Link href={`/${"sagar"}/preview`}>
          <Button variant={"outline"}>Preview</Button>
        </Link>
      </header>
      <section className="h-full">{children}</section>
    </main>
  );
}
