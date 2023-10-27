const Text = () => {
  return (
    <div className="h-auto w-full py-[60px] px-5 md:p-[100px] text-center">
      <div className="relative flex h-auto w-full flex-col justify-start gap-10 text-start">
        <h2 className="font-serif text-[48px] leading-[1.2em] text-primary">
          Dead-simple Solution
        </h2>
        <div className="flex max-w-[600px] flex-col items-center justify-center gap-10">
          <h3 className="font-sans text-[20px] font-medium leading-[1.5em] text-white">
            Showcase your online presence like never before with the wildly
            popular and mind-blowingly simple app DevLinks. Revolutionize the
            way you network, pupperoni!
          </h3>
          <h3 className="font-sans text-[20px] font-medium leading-[1.5em] text-white">
            Showcase your online presence like never before with the wildly
            popular and mind-blowingly simple app DevLinks. Revolutionize the
            way you network, pupperoni!
          </h3>
          <h3 className="font-sans text-[20px] font-medium leading-[1.5em] text-white">
            Ready to become the tech world’s most desirable belle at the ball?
            Hop on the DevLinks bandwagon and dazzle the digital scene right
            away!
          </h3>
        </div>
        <div className="absolute max-md:bottom-0 md:right-20 md:top-48 h-[345px] w-[344px] opacity-30">
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

export default Text;
