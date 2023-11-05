import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/serverClient";
import DevLinksLogo from "./DevLinksLogo";
import Link from "next/link";
import { PencilIcon } from "@heroicons/react/20/solid";

export function UserHeader({ id }: { id: string }) {
  const signOut = async () => {
    "use server";

    const supabase = createClient(cookies());
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    <header className="bg-neutral-900 py-4 w-full border rounded-md border-gray-800">
      <div className="flex flex-row items-center justify-between px-5">
        <DevLinksLogo />
        <Link
          href={`${id}/editor`}
          className="flex flex-row gap-x-2 text-blue-500 hover:underline"
        >
          Editor
          <PencilIcon className="w-5 h-5" />
        </Link>
        <div>
          <form action={signOut}>
            <button className="bg-gray-100/10 hover:bg-gray-100/40 active:bg-gray-100/50 px-4 py-2 rounded-md">
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
