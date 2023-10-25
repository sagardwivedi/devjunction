import Image from "next/image";
import Shape from "./components/Shape";

const Home = () => {
  return (
    <div className="h-auto flex flex-col justify-start items-center bg-primary_c overflow-hidden flex-nowrap">
      {/* Hero */}
      <div className="w-full  h-[400px] flex flex-row gap-[10px] p-5 bg-gradient-to-tr from-primary_c to-black overflow-hidden">
        <div className="relative max-w-7xl mx-auto flex flex-col w-full z-10">
          <div className="absolute -left-[350px] -bottom-56 h-auto w-auto flex flex-row justify-center items-center flex-nowrap gap-[10px] overflow-hidden grayscale z-[1]">
            <div className="h-[600px] w-[600px] relative opacity-50">
              <Image src="/Pastel_1.png" alt="" fill priority quality={100} />
            </div>
          </div>

          <div className="flex flex-row justify-between font-normal font-work_sans items-center">
            <Shape height="32" width="32" />
            <p className="text-[#B8B8FF] leading-[1.2em]">Features</p>
            <button className="text-[#B8B8FF] border border-[#B8B8FF]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
