const Text = () => {
  return (
    <div className="h-auto w-full p-[100px] text-center">
      <div className="w-full relative bg-red-500 h-auto flex flex-col justify-start text-start gap-10">
        <h2 className="leading-[1.2em] text-[48px] text-primary font-serif">
          Dead-simple Solution
        </h2>
        <div className="flex flex-col max-w-[600px] justify-center items-center gap-10">
          <h3 className="leading-[1.5em] text-[20px] text-white font-medium font-sans">
            Showcase your online presence like never before with the wildly
            popular and mind-blowingly simple app DevLinks. Revolutionize the
            way you network, pupperoni!
          </h3>
          <h3 className="leading-[1.5em] text-[20px] text-white font-medium font-sans">
            Showcase your online presence like never before with the wildly
            popular and mind-blowingly simple app DevLinks. Revolutionize the
            way you network, pupperoni!
          </h3>
          <h3 className="leading-[1.5em] text-[20px] text-white font-medium font-sans">
            Ready to become the tech world’s most desirable belle at the ball?
            Hop on the DevLinks bandwagon and dazzle the digital scene right
            away!
          </h3>
        </div>
        <div className="absolute bottom-0 right-0 w-[344px] h-[345px] opacity-30">
          <div className="inset-y-[172px] w-full h-px bg-secondary" />
          <div className="top-[172px] bottom-[173px] rotate-[60deg] w-full h-px bg-secondary" />
          <div className="top-[172px] bottom-[173px] rotate-[30deg] w-full h-px bg-secondary" />
          <div className="top-[172px] bottom-[173px] -rotate-[60deg] w-full h-px bg-secondary" />
          <div className="top-[172px] bottom-[173px] -rotate-[30deg] w-full h-px bg-secondary" />
          <div className="top-[172px] bottom-[173px] rotate-90 w-full h-px bg-secondary" />
        </div>
      </div>
    </div>
  );
};

export default Text;
