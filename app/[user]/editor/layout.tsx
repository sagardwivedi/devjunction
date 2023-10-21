import { Button } from "@nextui-org/button";
import Link from "next/link";
import { BsLink } from "react-icons/bs";
import Tab from "./components/Tab";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="p-5 space-y-5 h-full">
      <header className="bg-white flex flex-row justify-between items-center shadow-sm rounded-lg px-3 py-5 border border-neutral-950">
        <div className="flex flex-row gap-x-2 items-center">
          <BsLink size={30} />
          <span className="font-bold text-2xl">devLinks</span>
        </div>
        <Tab />
        <Link href={`/${"sagar"}/preview`}>
          <Button variant="bordered" radius="sm" size="lg">
            Preview
          </Button>
        </Link>
      </header>
      <section className="h-full">{children}</section>
    </main>
  );
}
