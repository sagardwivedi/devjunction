"use client";

import { useLinkStore } from "@/hooks/useLinkForm";
import { useProfileStore } from "@/hooks/useProfileStore";
import Image from "next/image";
import { Platform } from "../editor/components/ShowContent";

const Preview = () => {
  const { profile } = useProfileStore();
  const { inputs } = useLinkStore();
  return (
    <div className="flex justify-center items-center mt-24 shadow-xl bg-white max-w-sm mx-auto rounded-xl">
      <div className="p-10 space-y-8 w-full">
        <div className="space-y-2 flex flex-col items-center">
          <div className="h-32 border-[5px] border-secondary-500 rounded-full overflow-hidden w-32 relative">
            <Image src={profile.image} alt="" fill className="object-cover" />
          </div>
          <h1 className="font-bold text-black pt-2 space-x-2 text-3xl">
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
