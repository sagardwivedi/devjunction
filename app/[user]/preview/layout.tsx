export default function EditorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-secondary-500 h-[20rem] space-y-5 rounded-b-3xl p-5">
      <header className="flex flex-row items-center justify-between rounded-lg bg-white px-3 py-5 shadow-sm"></header>
      <section className="h-full">{children}</section>
    </main>
  );
}
