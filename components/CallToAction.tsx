import { Button } from "./ui/button";

const CallToAction = () => {
  return (
    <div className="relative flex h-fit w-full flex-col flex-nowrap items-center justify-center gap-[50px] p-5 md:gap-[100px] md:p-[100px]">
      <h2 className="z-10 max-w-[800px] text-center font-serif text-5xl leading-[1.2em] text-primary">
        Join Now
      </h2>
      <p className="z-10 h-auto w-[411px] max-w-full text-center font-sans font-medium leading-[1.5em] text-primary">
        Ready to shine like a supernova on the virtual stage? Cast aside your
        boring online presence, and ride the wave of spectacular tech networking
        with Linkmaster. Come, experience awesomeness!
      </p>
      <div className="z-10 flex w-full md:w-fit flex-col md:flex-row flex-nowrap items-center justify-center gap-[10px] pt-[10px]">
        <Button className="h-[40px] w-full rounded-lg bg-[#22333B] p-[15px] font-sans text-sm font-bold leading-[1.2em] text-white hover:bg-primary hover:text-black">
          Sign Up
        </Button>
        <Button className="h-[40px] w-full rounded-lg bg-primary p-[15px] font-sans text-sm font-bold leading-[1.2em] text-black hover:bg-[#22333B] hover:text-primary">
          Sign In
        </Button>
      </div>
      <div className="absolute right-28 z-0 h-[299px] w-[570px] rotate-[134deg] rounded-full border border-secondary opacity-30"></div>
    </div>
  );
};

export default CallToAction;
