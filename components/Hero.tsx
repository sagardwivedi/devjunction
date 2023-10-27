import Image from "next/image";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex h-auto w-full flex-row flex-nowrap items-center justify-center gap-[50px] p-5 md:min-h-[600px] md:gap-[100px] md:p-[100px]">
      <div className="flex h-auto w-full flex-col flex-nowrap items-center justify-center gap-[60px] md:flex-row">
        <div className="flex h-auto w-full max-w-[800px] flex-col flex-nowrap items-center justify-center gap-5 md:items-start">
          <div className="flex flex-row flex-nowrap items-center justify-center rounded-full border border-white px-5 py-[10px]">
            <p className="text-start font-sans font-bold leading-[1.2em] text-primary">
              DevLinks
            </p>
          </div>
          <h1 className="text-center font-serif text-4xl leading-[1.1em] text-primary md:text-start md:text-[80px]">
            Unleash your online presence
          </h1>
          <Button className="rounded-full bg-secondary px-5 py-[10px] font-sans font-bold leading-[1.5em] text-black hover:bg-primary max-md:w-full">
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
