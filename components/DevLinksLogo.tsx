import { Link1Icon } from "@radix-ui/react-icons";

const DevLinksLogo = () => {
  return (
    <div className="flex flex-row flex-nowrap items-center gap-x-2 justify-center rounded-full border border-white px-5 py-[10px]">
      <Link1Icon className="md:w-6 md:h-6 sm:w-5 sm:h-5 w-4 h-4" />
      <p className="text-start max-md:hidden font-sans font-bold leading-[1.2em]">
        DevLinks
      </p>
    </div>
  );
};

export default DevLinksLogo;
