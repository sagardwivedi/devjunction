import Image from "next/image";

const Section = () => {
  return (
    <div className="flex h-auto w-full flex-col flex-nowrap items-center justify-start gap-[60px] max-md:py-[60px] max-md:px-5 md:gap-14 md:p-24">
      <div className="relative flex h-auto w-full flex-col-reverse md:flex-row flex-nowrap items-center justify-center gap-14">
        <div className="relative z-10 h-[479px] w-full bg-blend-luminosity grayscale">
          <Image
            src={"/metalic.png"}
            alt=""
            fill
            className="rounded-[40px] object-cover"
          />
        </div>
        <div className="flex h-auto w-full flex-col items-start justify-center gap-5">
          <h3 className="max-w-[500px] text-start font-serif text-3xl leading-[1.2em] text-white">
            Generate an all-in-one link showcase easily
          </h3>
          <h3 className="max-w-[400px] text-start font-sans font-medium  leading-[1.5em] text-white">
            Forget old-school portfolios and mundane social media bios! Step
            into the spotlight and flaunt an all-encompassing digital exhibit,
            accessible by a single link!
          </h3>
        </div>
        <div className="absolute -left-[300px] -top-5 bottom-[200px] right-[730px] z-0 h-[299px] w-[570px] rotate-[134deg] rounded-full border border-secondary opacity-30"></div>
      </div>

      {/* 2nd */}
      <div className="relative flex h-auto w-full flex-col md:flex-row flex-nowrap items-center justify-center gap-14">
        <div className="flex h-auto w-full flex-col items-start justify-center gap-5">
          <h3 className="max-w-[450px] text-start font-serif text-3xl leading-[1.2em] text-white">
            Tailor-made, eye-catching themes and URLs
          </h3>
          <h3 className="max-w-[400px] text-start font-sans font-medium  leading-[1.5em] text-white">
            Unleash your creative side by styling your unique link-sharing page.
            Impress your tech-savvy network while promoting your authentic,
            fabulous persona.
          </h3>
        </div>
        <div className="relative z-10 h-[480px] w-full bg-blend-luminosity grayscale">
          <Image
            src={"/ferris.png"}
            alt=""
            fill
            className="rounded-b-200 rounded-tl-[40px] rounded-tr-200 object-cover "
          />
        </div>

        <div className="absolute right-0 top-0 z-0 h-[281px] w-[280px] opacity-30">
          <div className="inset-y-[172px] h-px w-full bg-secondary" />
          <div className="bottom-[173px] top-[172px] h-px w-full rotate-[60deg] bg-secondary" />
          <div className="bottom-[173px] top-[172px] h-px w-full rotate-[30deg] bg-secondary" />
          <div className="bottom-[173px] top-[172px] h-px w-full -rotate-[60deg] bg-secondary" />
          <div className="bottom-[173px] top-[172px] h-px w-full -rotate-[30deg] bg-secondary" />
          <div className="bottom-[173px] top-[172px] h-px w-full rotate-90 bg-secondary" />
        </div>
      </div>
    </div>
  );
};

export default Section;
