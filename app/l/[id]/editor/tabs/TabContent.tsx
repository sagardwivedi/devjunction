import { MobileMockup } from '@/components/MobileMockup';
import { LinkTab } from '../link-tab/LinkTab';
import { ProfileTab } from '../profile-tab/ProfileTab';

export function TabContent({ tab }: { tab: string }) {
  return (
    <div className="flex flex-row gap-5">
      <div className="sticky bottom-5 top-5 flex h-[45rem] w-[45%] items-center justify-center rounded-md bg-white p-5 max-md:hidden md:p-6">
        <MobileMockup />
      </div>
      <div className="h-full flex-grow overflow-y-auto rounded-md bg-white animate-in">
        {tab === 'link' ? <LinkTab /> : <ProfileTab />}
      </div>
    </div>
  );
}
