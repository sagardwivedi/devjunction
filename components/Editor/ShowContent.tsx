"use client";

import { Route } from "next";
import Link from "next/link";

import { getPlatformData } from "@/lib/placeholder";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export function Platform<T extends string>({
  link,
  platform,
}: {
  link: Route<T> | URL;
  platform: string;
}) {
  
  const value = getPlatformData(platform);

  return (
    <Link
      href={link}
      className={`${
        value ? value.backgroundColor : "bg-gray-200"
      } group flex h-12 w-full flex-row items-center justify-between rounded-md px-4 text-white`}
    >
      <div className="flex flex-row gap-x-2">
        {value && <value.logo />}
        <span>{platform}</span>
      </div>
      {value && (
        <ArrowRightIcon
          color="white"
          className="transition group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}

const ShowContent = () => {
  return (
    <div className="relative flex h-full justify-center py-10">
      {/* Phone Mockup */}
      <div className="relative h-[650px] w-[350px] rounded-3xl bg-black">
        {/* Content */}
        <div className="absolute left-2 top-3 flex h-[95%] w-[95%] flex-col items-center space-y-10 rounded-[2rem] bg-neutral-500 p-5">
          <div className="space-y-3 text-center">
            <div className="relative mb-5 h-40 w-40 overflow-hidden rounded-full"></div>
          </div>
          <div className="scrollbar-hide w-full space-y-4 overflow-y-auto scroll-smooth rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default ShowContent;
