const Text = () => {
  return (
    <div className="h-auto w-full px-5 py-[60px] text-center md:p-[100px]">
      <div className="relative flex h-auto w-full flex-col justify-start gap-10 text-start">
        <h2 className=" font-serif text-[48px] leading-[1.2em]">
          Dead-simple Solution
        </h2>
        <div className="flex max-w-[600px] flex-col items-center justify-center gap-10">
          <h3 className="font-sans text-[20px] font-medium leading-[1.5em]">
            Showcase your online presence like never before with the wildly
            popular and mind-blowingly simple app DevLinks. Revolutionize the
            way you network, pupperoni!
          </h3>
          <h3 className="font-sans text-[20px] font-medium leading-[1.5em]">
            Showcase your online presence like never before with the wildly
            popular and mind-blowingly simple app DevLinks. Revolutionize the
            way you network, pupperoni!
          </h3>
          <h3 className="font-sans text-[20px] font-medium leading-[1.5em]">
            Ready to become the tech world’s most desirable belle at the ball?
            Hop on the DevLinks bandwagon and dazzle the digital scene right
            away!
          </h3>
        </div>
        <div className="absolute h-[345px] w-[344px] opacity-30 max-md:bottom-0 md:right-20 md:top-48">
          <div className="inset-y-[172px] h-px w-full bg-neutral-400" />
          <div className="bottom-[173px] top-[172px] h-px w-full rotate-[60deg] bg-neutral-400" />
          <div className="bottom-[173px] top-[172px] h-px w-full rotate-[30deg] bg-neutral-400" />
          <div className="bottom-[173px] top-[172px] h-px w-full -rotate-[60deg] bg-neutral-400" />
          <div className="bottom-[173px] top-[172px] h-px w-full -rotate-[30deg] bg-neutral-400" />
          <div className="bottom-[173px] top-[172px] h-px w-full rotate-90 bg-neutral-400" />
        </div>
      </div>
    </div>
  );
};

export default Text;
