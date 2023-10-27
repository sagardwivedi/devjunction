import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex h-auto md:min-h-[600px] w-full flex-row flex-nowrap items-center justify-center gap-[50px] p-5 md:gap-[100px] md:p-[100px]">
      <div className="flex h-auto w-full flex-col flex-nowrap items-center justify-center gap-[60px] md:flex-row">
        <div className="flex h-auto w-full max-w-[800px] flex-col flex-nowrap items-center md:items-start justify-center gap-5">
          <div className="flex flex-row flex-nowrap items-center justify-center rounded-full py-[10px] px-5 border border-white">
            <p className="text-start font-sans font-bold leading-[1.2em] text-primary">
              DevLinks
            </p>
          </div>
          <h1 className="md:text-start text-center font-serif text-4xl md:text-[80px] leading-[1.1em] text-primary">
            Unleash your online presence
          </h1>
          <Button className="rounded-full max-md:w-full bg-secondary px-5 py-[10px] font-sans font-bold leading-[1.5em] text-black hover:bg-primary">
            Get Started
          </Button>
        </div>
        <div className="grid w-full grid-cols-3 grid-rows-3 gap-5 overflow-hidden">
          <div className="col-span-2 h-[143px] w-auto overflow-hidden rounded-bl-200 rounded-tr-200 bg-secondary" />
          <div className="relative col-span-1 h-[143px] w-auto overflow-hidden rounded-bl-200 rounded-tl-200 rounded-tr-200 bg-secondary bg-blend-luminosity grayscale">
            <Image src={"/write.png"} alt="" fill className="object-cover" />
          </div>
          <div className="relative col-span-1 h-[144px] w-auto overflow-hidden rounded-bl-200 rounded-br-200 rounded-tr-200 bg-secondary bg-blend-luminosity grayscale">
            <Image src={"/code.png"} alt="" fill className="object-cover" />
          </div>
          <div className="col-span-1 h-[144px] w-auto bg-secondary" />
          <div className="relative col-span-1 h-[144px] w-auto overflow-hidden rounded-bl-200 bg-secondary bg-blend-luminosity grayscale">
            <Image src={"/note.png"} alt="" fill className="object-cover" />
          </div>
          <div className="col-span-1 h-[143px] w-auto rounded-full bg-secondary" />
          <div className="relative col-span-2 h-[144px] w-auto overflow-hidden rounded-bl-200 rounded-tl-200 rounded-tr-200 bg-secondary bg-blend-luminosity grayscale">
            <Image src={"/person.png"} alt="" fill className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
