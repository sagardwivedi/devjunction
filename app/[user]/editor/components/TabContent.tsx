import { useSearchParams } from "next/navigation";

const TabContent = () => {
  const tab = useSearchParams();
  const value = tab.get("tab");
  return <div></div>;
};

export default TabContent;
