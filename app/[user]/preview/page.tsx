"use client";

import { useLinkStore } from "@/hooks/useLinkForm";
import { useProfileStore } from "@/hooks/useProfileStore";
import Image from "next/image";
import { Platform } from "../editor/components/ShowContent";

const Preview = () => {
  const { profile } = useProfileStore();
  const { inputs } = useLinkStore();
  return (
    <div className="mx-auto mt-24 flex max-w-sm items-center justify-center rounded-xl bg-white shadow-xl">
      <div className="w-full space-y-8 p-10">
        <div className="flex flex-col items-center space-y-2">
          <div className="border-secondary-500 relative h-32 w-32 overflow-hidden rounded-full border-[5px]">
            <Image src={profile.image} alt="" fill className="object-cover" />
          </div>
          <h1 className="space-x-2 pt-2 text-3xl font-bold text-black">
            <span>{profile.firstName}</span>
            <span>{profile.lastName}</span>
          </h1>
          <p className="text-neutral-500">{profile.email}</p>
        </div>
        <div className="w-full space-y-4 rounded-md">
          {Object.values(inputs).map((item) => (
            <Platform key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preview;
