"use client";

import { useQueryState } from "next-usequerystate";
import { BiLink } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";

const Tabs = () => {
  const [tab, setTab] = useQueryState("tab");

  const handleClick = (value: string) => {
    setTab(value);
  };

  const isSelected = tab === "link";

  return (
    <div className="flex gap-x-5">
      <div
        onClick={() => handleClick("link")}
        className={`flex cursor-pointer items-center gap-x-2 rounded-lg px-4 py-2 ${
          isSelected ? "bg-gray-200" : "hover:bg-gray-100"
        }`}
      >
        <BiLink size={20} />
        <span>Link</span>
      </div>
      <div
        onClick={() => handleClick("profile")}
        className={`flex cursor-pointer items-center gap-x-2 rounded-lg px-4 py-2 ${
          !isSelected ? "bg-gray-200" : "hover:bg-gray-100"
        }`}
      >
        <BsPersonCircle size={20} />
        <span>Profile Details</span>
      </div>
    </div>
  );
};

export default Tabs;
