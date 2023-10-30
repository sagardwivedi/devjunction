import Image from "next/image";
import Link from "next/link";
import DevLinksLogo from "../DevLinksLogo";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const Hero = () => {
  return (
    <div className="flex h-auto w-full flex-row flex-nowrap items-center justify-center gap-[50px] p-5 md:min-h-[600px] md:gap-[100px] md:p-[100px]">
      <div className="flex h-auto w-full flex-col flex-nowrap items-center justify-center gap-[60px] md:flex-row">
        <div className="flex h-auto w-full max-w-[800px] flex-col flex-nowrap items-center justify-center gap-5 md:items-start">
          <DevLinksLogo />
          <h1 className="text-center font-serif text-4xl leading-[1.1em] md:text-start md:text-[80px]">
            Unleash your online presence
          </h1>
          <Link
            href={"/login"}
            className="rounded-full flex group flex-row text-lg items-center gap-2 bg-white px-4 py-2 font-sans text-black"
          >
            Get Started
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid w-full grid-cols-3 grid-rows-3 gap-5 overflow-hidden">
          <div className="col-span-2 h-[143px] rounded-b-full rounded-tl-full bg-neutral-500" />
          <Image
            src={"/write.png"}
            alt=""
            width={100}
            height={100}
            loading="lazy"
            className="bg-secondary h-[143px] w-full rounded-bl-full rounded-tl-full rounded-tr-full object-cover bg-blend-luminosity grayscale"
          />

          <Image
            src={"/code.png"}
            alt=""
            width={100}
            height={100}
            className="bg-secondary h-[144px] w-full rounded-bl-full rounded-br-full rounded-tr-full object-cover bg-blend-luminosity grayscale"
          />

          <div className="col-span-1 h-[144px] w-auto bg-neutral-500" />

          <Image
            src={"/note.png"}
            alt=""
            width={100}
            height={100}
            className="bg-secondary h-[144px] w-full rounded-bl-full object-cover bg-blend-luminosity grayscale"
          />
          <div className="col-span-1 h-[143px] w-auto rounded-full bg-neutral-500" />

          <Image
            src={"/person.png"}
            alt=""
            width={1000}
            height={1000}
            className="bg-secondary col-span-2 h-[144px] w-full rounded-bl-full rounded-tl-full rounded-tr-full object-cover bg-blend-luminosity grayscale"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
