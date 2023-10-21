"use client";

import { useQueryState } from "next-usequerystate";
import { IconType } from "react-icons";
import { BiLink } from "react-icons/bi";
import { BsPersonCircle } from "react-icons/bs";

import useTabStore from "@/hooks/tabContent";

const Tabs = () => {
  const [, setTab] = useQueryState("tab");
  const { setTabState } = useTabStore();

  const handleClick = (value: string) => {
    setTab(value);
    setTabState(value);
  };

  const createTab = (tabName: string, Icon: IconType, label: string) => (
    <div
      onClick={() => handleClick(tabName)} // Corrected here
      className="cursor-pointer flex items-center gap-x-2 hover:bg-blue-500/50 hover:text-white px-4 py-2 rounded-lg"
    >
      <Icon size={20} />
      <span>{label}</span>
    </div>
  );

  return (
    <div className="flex gap-x-5">
      {createTab("link", BiLink, "Links")}
      {createTab("profile", BsPersonCircle, "Profile Details")}
    </div>
  );
};

export default Tabs;
