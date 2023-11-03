import DevLinksLogo from "@/components/DevLinksLogo";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5 animate-in md:p-16 lg:p-24">
      <div className="flex h-auto w-full flex-col flex-nowrap items-center justify-center gap-[60px] lg:flex-row">
        <div className="flex h-auto w-full max-w-[800px] flex-col flex-nowrap items-center justify-center gap-5 md:items-start">
          <DevLinksLogo />
          <h1 className="text-center font-serif text-4xl leading-[1.1em] md:text-start md:text-[80px]">
            Unleash your online presence
          </h1>
          <Link
            href={"/login"}
            className="flex flex-row items-center gap-x-2 rounded-full bg-white p-2 text-lg text-black"
          >
            <p className="font-sans">Get Started</p>
            <ArrowRightIcon className="h-5 w-5" />
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
            className="landing-img"
          />

          <Image
            src={"/code.png"}
            alt=""
            width={100}
            height={100}
            className="landing-img"
          />

          <div className="col-span-1 h-[144px] w-auto bg-neutral-500" />

          <Image
            src={"/note.png"}
            alt=""
            width={100}
            height={100}
            className="landing-img"
          />
          <div className="col-span-1 h-[143px] w-auto rounded-full bg-neutral-500" />

          <Image
            src={"/person.png"}
            alt=""
            width={1000}
            height={1000}
            className="landing-img col-span-2"
          />
        </div>
      </div>
    </div>
  );
}
