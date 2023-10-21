"use client";

import { useQueryState } from "next-usequerystate";
import { BiLink } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";

const Tab = () => {
  const [, setName] = useQueryState("tab");

  return (
    <div className="flex flex-row gap-x-5">
      <div
        onClick={() => setName("link")}
        className="cursor-pointer flex flex-row items-center gap-x-2 hover:bg-blue-500/50 hover:text-white px-4 py-2 rounded-lg"
      >
        <BiLink size={20} />
        <span>Links</span>
      </div>
      <div
        onClick={() => setName("profile")}
        className="cursor-pointer flex flex-row items-center gap-x-2 hover:bg-blue-500/50 hover:text-white px-4 py-2 rounded-lg"
      >
        <BsPersonCircle size={20} />
        <span>Profile Details</span>
      </div>
    </div>
  );
};

export default Tab;
