import { DevLinksLogo } from "@/components/DevLinksLogo";
import { Messsage } from "@/components/Message";
import { SignupForm } from "./signup-form";

export default function Signup() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="mb-8">
        <DevLinksLogo />
      </div>
      <div className="mx-auto w-[90%] max-w-md md:w-full">
        <SignupForm />
      </div>
      <Messsage />
    </div>
  );
}
