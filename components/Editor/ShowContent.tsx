"use client";

import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLinkFormStore } from "@/hooks/useLinkStore";
import { getPlatformData } from "@/lib/placeholder";
import { cn } from "@/lib/utils";

export function Platform<T extends string>({
  link,
  platform,
}: {
  link: string;
  platform: string;
}) {
  const value = getPlatformData(platform);

  return (
    <Link
      href={link}
      className={cn(
        value ? value.backgroundColor : "bg-neutral-100/50",
        "group flex h-12 w-full flex-row items-center justify-between rounded-md px-4 text-white"
      )}
    >
      <div className="flex flex-row gap-x-2 items-center">
        {value && <value.logo className="w-5 h-5" />}
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

export const ShowContent = () => {
  const { components } = useLinkFormStore();

  return (
    <div className="relative flex h-full justify-center py-10">
      {/* Phone Mockup */}
      <div className="relative h-[650px] w-[350px] rounded-3xl bg-black">
        {/* Content */}
        <div className="absolute left-2 top-3 flex h-[95%] w-[95%] flex-col items-center space-y-10 rounded-[2rem] bg-neutral-500 p-5">
          <div className="space-y-3 flex flex-col justify-center items-center">
            <Avatar className="w-36 h-36 rounded-full">
              <AvatarImage />
              <AvatarFallback className="bg-neutral-100/50" />
            </Avatar>
            <div className="space-y-2">
              <p className="bg-neutral-100/50 h-5 w-48 rounded-xl"></p>
              <p className="bg-neutral-100/50 h-4 rounded-xl"></p>
            </div>
          </div>
          <ScrollArea className="w-full">
            <div className="space-y-4">
              {components.map((com) => (
                <Platform
                  key={com.id}
                  link={com.inputValue}
                  platform={com.selectValue}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};
