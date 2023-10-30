import { Link1Icon } from "@radix-ui/react-icons";

const DevLinksLogo = () => {
  return (
    <div className="flex flex-row flex-nowrap items-center gap-x-2 justify-center rounded-full border border-white px-5 py-[10px]">
      <Link1Icon className="w-6 h-6" />
      <p className=" text-start font-sans font-bold leading-[1.2em]">
        DevLinks
      </p>
    </div>
  );
};

export default DevLinksLogo;
