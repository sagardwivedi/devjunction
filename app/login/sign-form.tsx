"use client";

import { EnvelopeClosedIcon, LockOpen1Icon } from "@radix-ui/react-icons";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <form action={"/auth/sign-in"} method="post" className="space-y-5">
      <div>
        <Label htmlFor="email">Email</Label>
        <div className="flex px-2 rounded-lg border-white border-2 overflow-hidden flex-row-reverse mt-2 items-center">
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="user@gmail.com"
            className="border-none focus-visible:ring-0"
            required
          />
          <EnvelopeClosedIcon className="w-5 h-5" />
        </div>
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <div className="flex px-2 rounded-lg border-white border-2 overflow-hidden flex-row-reverse mt-2 items-center">
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            className="border-none group focus-visible:ring-0"
            minLength={8}
            required
          />
          <LockOpen1Icon className="w-5 h-5" />
        </div>
      </div>
      <div className="space-y-4">
        <LoginButton />
        <SignupButton />
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      aria-disabled={pending}
      variant={"secondary"}
      className="px-4 py-2 w-full"
    >
      Log In
    </Button>
  );
}

function SignupButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      aria-disabled={pending}
      variant={"outline"}
      className="px-4 py-2 w-full"
      formAction={"/auth/sign-up"}
    >
      Sign Up
    </Button>
  );
}
