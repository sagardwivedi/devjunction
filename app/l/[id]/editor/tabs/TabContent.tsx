import { LinkForm } from "@/components/link-tab/LinkForm";
import { ProfileForm } from "@/components/profile-tab/ProfileForm";

export function TabContent({ tab }: { tab: string }) {
  return (
    <div className="flex h-full flex-row gap-x-5">
      <div className="w-[40%] rounded-xl bg-neutral-900 max-md:hidden"></div>
      <div className="h-full flex-1 rounded-xl bg-neutral-900">
        {tab === "link" ? <LinkForm /> : <ProfileForm />}
      </div>
    </div>
  );
}
