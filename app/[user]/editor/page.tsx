import TabContent from "./components/TabContent";

const Editor = () => {
  return (
    <div className="flex flex-row items-center h-full gap-5">
      <div className="bg-white border border-neutral-500 shadow h-[720px] rounded-lg w-[40%]"></div>
      <div className="bg-white border border-neutral-500 shadow h-[720px] rounded-lg flex-1">
        <TabContent />
      </div>
    </div>
  );
};

export default Editor;
