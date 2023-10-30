import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <div className="relative flex justify-center items-center p-12 md:p-24 gap-8 flex-col">
      <h2 className="z-10 max-w-[800px] text-center font-serif text-5xl leading-[1.2em]">
        Join Now
      </h2>
      <p className="z-10 h-auto w-[411px] max-w-full text-center font-sans font-medium leading-[1.5em]">
        Ready to shine like a supernova on the virtual stage? Cast aside your
        boring online presence, and ride the wave of spectacular tech networking
        with Linkmaster. Come, experience awesomeness!
      </p>
      <Link href={"/login"}>
        <Button className="button-primary rounded-full transition-colors group gap-x-2 text-lg">
          Get Started
          <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
      <div className="border-white absolute right-28 z-0 h-[299px] w-[570px] rotate-[134deg] rounded-full border opacity-30"></div>
    </div>
  );
};

export default CallToAction;
