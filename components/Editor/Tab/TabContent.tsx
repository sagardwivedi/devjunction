import LinksForm from "../LinkTab/LinksForm";
import ProfileTab from "../ProfileTab/ProfileTab";
import { ShowContent } from "../ShowContent";

interface TabContentProps {
  tab: string;
}

export function TabContent({ tab }: TabContentProps) {
  return (
    <div className="flex h-full flex-row items-center gap-5">
      <div className="h-[720px] w-[40%] rounded-lg bg-neutral-900 shadow max-lg:hidden">
        <ShowContent />
      </div>
      <div className="md:h-[720px] flex-1 rounded-lg animate-in bg-neutral-900 shadow">
        {tab === "link" ? <LinksForm /> : <ProfileTab />}
      </div>
    </div>
  );
}
