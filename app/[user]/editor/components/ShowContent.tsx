"use client";

import { LinkInput, useLinkStore } from "@/hooks/useLinkForm";
import Link from "next/link";

function Platform({ id, link, platform }: LinkInput) {
  return (
    <Link href={link} className="bg-green-400 w-[80%] h-8 rounded-md">
      <div>{}</div>
      <div>{platform}</div>
    </Link>
  );
}

const ShowContent = () => {
  const { linkInputs } = useLinkStore();

  return (
    <div className="flex justify-center h-full items-center">
      <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
        <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>

        <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white ">
          <div className="flex flex-col gap-y-5 h-full justify-center items-center w-full bg-red-300">
            <div className="overflow-y-auto h-[400px] will-change-scroll w-full">
              {linkInputs.map((item) => (
                <Platform key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowContent;
