import { EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function PreviewButton({ id }: { id: string }) {
  return (
    <Link
      className="block rounded-md border border-gray-100 px-4 py-2 transition-colors hover:bg-gray-100 hover:text-black"
      href={`/l/${id}`}
    >
      <EyeIcon className="w-5 h-5 md:hidden" />
      <p className="max-md:hidden">Preview</p>
    </Link>
  );
}
