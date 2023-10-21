"use client";

import useTabStore from "@/hooks/tabContent";
import LinksForm from "./Links";

const TabContent = () => {
  const { tab } = useTabStore();

  return <>{tab === "link" ? <LinksForm /> : null}</>;
};

export default TabContent;
