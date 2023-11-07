import Link from "next/link";

export function PreviewButton({ id }: { id: string }) {
  return (
    <Link
      className="block rounded-md border border-gray-100 px-4 py-2 transition-colors hover:bg-gray-100 hover:text-black"
      href={`/l/${id}`}
    >
      Preview
    </Link>
  );
}
