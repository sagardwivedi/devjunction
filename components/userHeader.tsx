import { PencilIcon } from "@heroicons/react/20/solid";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/serverClient";
import { DevLinksLogo } from "./DevLinksLogo";

export function UserHeader({ id }: { id: string }) {
  const signOut = async () => {
    "use server";

    const supabase = createClient(cookies());
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return (
    <header className="w-full rounded-md border border-gray-800 bg-neutral-900 py-4">
      <div className="flex flex-row items-center justify-between px-5">
        <DevLinksLogo />
        <Link
          href={`${id}/editor`}
          className="flex flex-row gap-x-2 text-blue-500 hover:underline"
        >
          Editor
          <PencilIcon className="h-5 w-5" />
        </Link>
        <div>
          <form action={signOut}>
            <button className="rounded-md bg-gray-100/10 px-4 py-2 hover:bg-gray-100/40 active:bg-gray-100/50">
              Sign Out
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
