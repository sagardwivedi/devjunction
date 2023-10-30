import LinksForm from "@/components/Editor/LinkTabs/Links";
import ProfileTab from "@/components/Editor/ProfileTab/ProfileTab";
import ShowContent from "@/components/Editor/ShowContent";

const Editor = ({ searchParams }: { searchParams: { tab?: string } }) => {
  const tab = searchParams?.tab || "link";

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
};

export default Editor;
