"use client";

import { loginAction } from "@/lib/actions/authAction";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";

export function LoginForm() {
  const initialState = { message: null, error: {} };
  const [state, action] = useFormState(loginAction, initialState);

  return (
    <form action={action} className="space-y-3">
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="Email"
          id="email"
          className={`mt-2 w-full rounded-md border border-gray-300 bg-transparent p-2 focus:outline-none ${
            state.errors?.email ? "border-red-500" : ""
          }`}
        />
        {state.errors?.email && (
          <div>
            {state.errors.email.map((error) => (
              <p key={error} className="text-red-500">
                {error}
              </p>
            ))}
          </div>
        )}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="Password"
          id="password"
          className={`mt-2 w-full rounded-md border border-gray-300 bg-transparent p-2 focus:outline-none ${
            state.errors?.password ? "border-red-500" : ""
          }`}
        />
        {state.errors?.password && (
          <div>
            {state.errors.password.map((error) => (
              <p key={error} className="text-red-500">
                {error}
              </p>
            ))}
          </div>
        )}
      </div>
      {state.message ? <p>{state.message}</p> : null}
      <div className="flex w-full flex-col items-center gap-3">
        <SaveButton />
        <SignUpButton />
      </div>
    </form>
  );
}

function SaveButton() {
  const { pending } = useFormStatus();
  return (
    <button
      aria-disabled={pending}
      className="flex w-full items-center justify-center gap-x-2 rounded-lg  bg-white p-2 text-black transition-all hover:bg-white hover:text-black active:opacity-50"
    >
      {pending ? <ArrowPathIcon className="h-5 w-5 animate-spin" /> : null}
      Log in
    </button>
  );
}

function SignUpButton() {
  const { push } = useRouter();
  return (
    <button
      type="button"
      onClick={() => push("/signup")}
      className="flex w-full items-center justify-center gap-x-2 rounded-lg border border-white p-2 transition-all hover:bg-white hover:text-black active:opacity-50"
    >
      Sign Up
    </button>
  );
}
