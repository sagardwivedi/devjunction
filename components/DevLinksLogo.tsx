import { LinkIcon } from '@heroicons/react/20/solid';

export const DevLinksLogo = () => {
  return (
    <div className="flex flex-row flex-nowrap items-center justify-center gap-x-2 rounded-full border border-black px-5 py-[10px]">
      <LinkIcon className="h-4 w-4 rotate-45 sm:h-5 sm:w-5 md:h-6 md:w-6" />
      <p className="text-start font-sans font-bold leading-[1.2em] max-md:hidden">
        DevJuntcion
      </p>
    </div>
  );
};
