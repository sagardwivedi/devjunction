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
      } rounded-md h-12 group w-full text-white px-4 flex flex-row justify-between items-center`}
    >
      <div className="flex flex-row gap-x-2">
        {value && <value.logo size={25} />}
        <span>{platform}</span>
      </div>
      {value && (
        <BsArrowRight
          color="white"
          size={25}
          className="group-hover:translate-x-1 transition"
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
      <div className="bg-black w-[350px] rounded-3xl h-[650px] relative">
        {/* Content */}
        <div className="absolute top-3 rounded-[2rem] left-2 w-[95%] h-[95%] bg-white flex flex-col items-center space-y-10 p-5">
          <div className="space-y-3 text-center">
            <div className="h-40 w-40 mb-5 rounded-full relative overflow-hidden">
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
              <p className="space-x-2 font-semibold text-xl">
                <span>{profile.firstName}</span>
                <span>{profile.lastName}</span>
              </p>
            ) : (
              <p className="rounded-lg bg-gray-200 h-6"></p>
            )}
            {profile.email ? (
              <p>{profile.email}</p>
            ) : (
              <p className="rounded-lg bg-gray-200 text-sm h-6 w-[70%] mx-auto"></p>
            )}
          </div>
          <div className="w-full space-y-4 overflow-y-auto scroll-smooth scrollbar-hide rounded-md">
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
