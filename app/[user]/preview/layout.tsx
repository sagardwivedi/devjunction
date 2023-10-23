import { Button } from "@nextui-org/button";

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-[20rem] space-y-5 bg-secondary-500 rounded-b-3xl p-5">
      <header className="flex flex-row items-center justify-between rounded-lg bg-white px-3 py-5 shadow-sm">
        <Button variant="bordered" radius="sm" size="lg" color="secondary">Back to Editor</Button>
        <Button size="lg" radius="sm" color="secondary">Share Link</Button>
      </header>
      <section className="h-full">{children}</section>
    </main>
  );
}
