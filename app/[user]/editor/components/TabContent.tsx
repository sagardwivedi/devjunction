"use client";

import useTabStore from "@/hooks/tabContent";
import LinksForm from "./Links";
import ProfileTab from "./ProfileTab";

const TabContent = () => {
  const { tab } = useTabStore();

  return <>{tab === "link" ? <LinksForm /> : <ProfileTab />}</>;
};

export default TabContent;
