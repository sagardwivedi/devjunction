"use client";

import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

import { useMultipleInput } from "@/hooks/use-multiple-input";
import { Link as LinkType } from "@/types/definition";

function LinkCard({ link, platform }: LinkType) {
  if (link.length === 0 || platform.length === 0) {
    return <div className="w-full bg-red-400">Hello</div>;
  }

  return (
    <Link
      href={link}
      className="group flex flex-row justify-between rounded-md px-3 py-2"
    >
      <p>{platform}</p>
      <ArrowRightIcon className="h-6 w-6 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function Details({ social }: { social: LinkType[] | null }) {
  const links = useMultipleInput((state) => (state.inputFields = social || []));

  return (
    <div className="flex h-full flex-col items-center py-5">
      <div>Hello</div>
      <div className="w-[85%] space-y-2">
        {links.map((link) => (
          <LinkCard {...link} key={link.id} />
        ))}
      </div>
    </div>
  );
}
