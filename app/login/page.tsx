import { DevLinksLogo } from "@/components/DevLinksLogo";
import { LoginForm } from "./login-form";
import { Messsage } from "@/components/Message";

export default function Login() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div className="mb-8">
        <DevLinksLogo />
      </div>
      <div className="mx-auto w-[90%] max-w-md md:w-full">
        <LoginForm />
      </div>
      <Messsage />
    </div>
  );
}
