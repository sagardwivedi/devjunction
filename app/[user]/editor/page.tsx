import ShowContent from "./components/ShowContent";
import TabContent from "./components/TabContent";

const Editor = () => {
  return (
    <div className="flex h-full flex-row items-center gap-5">
      <div className="h-[720px] w-[40%] rounded-lg bg-white shadow max-lg:hidden">
        <ShowContent />
      </div>
      <div className="h-[720px] flex-1 rounded-lg bg-white shadow">
        <TabContent />
      </div>
    </div>
  );
};

export default Editor;
