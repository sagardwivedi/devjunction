import Link from "next/link";
import { BsLink } from "react-icons/bs";
import Tab from "./components/Tab";
import { Button } from "@/components/ui/button";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full space-y-5 p-5">
      <header className="flex flex-row items-center justify-between rounded-lg  bg-white px-3 py-5 shadow-sm">
        <div className="flex flex-row items-center gap-x-2">
          <BsLink size={30} />
          <span className="text-2xl font-bold">devLinks</span>
        </div>
        <Tab />
        <Link href={`/${"sagar"}/preview`}>
          <Button>Preview</Button>
        </Link>
      </header>
      <section className="h-full">{children}</section>
    </main>
  );
}
