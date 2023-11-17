import Link from "next/link";

import { AuthFormButton } from "@/components/butons";
import { signupAction } from "@/lib/actions/authAction";
import {
  EmailInput,
  FnameInput,
  LnameInput,
  PasswordInput,
} from "@/components/form-inputs";

export function SignupForm() {
  return (
    <form action={signupAction} className="space-y-8 animate-in">
      <div className="space-y-4">
        <div className="flex flex-row items-center gap-x-4">
          <FnameInput />
          <LnameInput />
        </div>
        <EmailInput />
        <PasswordInput />
      </div>
      <AuthFormButton text="Sign Up" />
      <div className="flex flex-row justify-center gap-x-2">
        <p>Aleadry have an account?</p>
        <Link href={"/login"} className="text-blue-500 hover:underline">
          Login
        </Link>
      </div>
    </form>
  );
}
