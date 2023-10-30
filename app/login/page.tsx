import DevLinksLogo from "@/components/DevLinksLogo";
import LoginForm from "./sign-form";

const Login = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="max-w-sm w-[90%] flex-1 space-y-8">
        <DevLinksLogo />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
