import { MobileMockup } from "@/components/MobileMockup";
import { LinkTab } from "@/components/link-tab/LinkTab";
import { ProfileTab } from "@/components/profile-tab/ProfielTab";

export function TabContent({ tab }: { tab: string }) {
  return (
    <div className="flex h-full flex-row gap-x-5">
      <div className="flex w-[40%] items-center justify-center rounded-xl bg-white max-md:hidden">
        <MobileMockup />
      </div>
      <div className="h-full flex-1 rounded-xl bg-white">
        {tab === "link" ? <LinkTab /> : <ProfileTab />}
      </div>
    </div>
  );
}
