"use client";

import { cn } from "@/lib/utils";
import { Link1Icon, PersonIcon } from "@radix-ui/react-icons";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Tabs() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleTab(tab: string) {
    const params = new URLSearchParams(searchParams);

    if (tab) {
      params.set("tab", tab);
    } else {
      params.delete("tab");
    }

    replace(`${pathname}?${params.toString()}`);
  }

  const isSelected = searchParams.get("tab")?.toString() === "link";

  return (
    <div className="flex gap-x-2 md:gap-x-5 text-white">
      <div
        onClick={() => handleTab("link")}
        className={cn(
          "flex cursor-pointer items-center gap-x-2 rounded-lg px-4 py-2",
          isSelected
            ? "bg-neutral-100/10 text-white"
            : "hover:bg-neutral-50/10 hover:text-white"
        )}
      >
        <Link1Icon className="w-5 h-5 md:w-6 md:h-6" />
        <span className="max-md:hidden">Link</span>
      </div>
      <div
        onClick={() => handleTab("profile")}
        className={cn(
          "flex cursor-pointer items-center gap-x-2 rounded-lg px-4 py-2",
          !isSelected
            ? "bg-neutral-100/10 text-white"
            : "hover:bg-neutral-50/10 hover:text-white"
        )}
      >
        <PersonIcon className="w-5 h-5 md:w-6 md:h-6" />
        <span className="max-md:hidden">Profile Details</span>
      </div>
    </div>
  );
}
