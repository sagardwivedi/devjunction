"use client";

import { Route } from "next";
import Link from "next/link";

import { useLinkStore } from "@/hooks/useLinkForm";
import { useProfileStore } from "@/hooks/useProfileStore";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import { getPlatformData } from "../data/data";

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
        {value && <value.logo size={25} />}
        <span>{platform}</span>
      </div>
      {value && (
        <BsArrowRight
          color="white"
          size={25}
          className="transition group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}

const ShowContent = () => {
  const { inputs } = useLinkStore();
  const { profile } = useProfileStore();

  return (
    <div className="relative flex h-full justify-center py-10">
      {/* Phone Mockup */}
      <div className="relative h-[650px] w-[350px] rounded-3xl bg-black">
        {/* Content */}
        <div className="absolute left-2 top-3 flex h-[95%] w-[95%] flex-col items-center space-y-10 rounded-[2rem] bg-white p-5">
          <div className="space-y-3 text-center">
            <div className="relative mb-5 h-40 w-40 overflow-hidden rounded-full">
              {profile.image ? (
                <Image
                  src={profile.image}
                  alt=""
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gray-200" />
              )}
            </div>
            {profile.firstName || profile.lastName ? (
              <p className="space-x-2 text-xl font-semibold">
                <span>{profile.firstName}</span>
                <span>{profile.lastName}</span>
              </p>
            ) : (
              <p className="h-6 rounded-lg bg-gray-200"></p>
            )}
            {profile.email ? (
              <p>{profile.email}</p>
            ) : (
              <p className="mx-auto h-6 w-[70%] rounded-lg bg-gray-200 text-sm"></p>
            )}
          </div>
          <div className="scrollbar-hide w-full space-y-4 overflow-y-auto scroll-smooth rounded-md">
            {Object.values(inputs).map((item) => (
              <Platform key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowContent;
