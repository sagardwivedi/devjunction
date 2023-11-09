"use client";

import { ArrowPathIcon } from "@heroicons/react/20/solid";
import { useFormState, useFormStatus } from "react-dom";

import { signupAction } from "@/lib/actions/authAction";
import Link from "next/link";

export function SignupForm() {
  const initialState = { message: "", errors: {} };
  const [state, action] = useFormState(signupAction, initialState);

  return (
    <form action={action} className="space-y-8">
      <div className="space-y-4">
        <div className="flex flex-row items-center gap-x-4">
          <div>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              name="firstName"
              id="fname"
              className={`mt-2 w-full rounded-md border border-gray-300 bg-transparent p-2 focus:outline-none ${
                state.errors?.firstname ? "border-red-500" : ""
              }`}
            />
            {state.errors?.firstname && (
              <div>
                {state.errors.firstname.map((error) => (
                  <p key={error} className="text-red-500">
                    {error}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div>
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lname"
              className={`mt-2 w-full rounded-md border border-gray-300 bg-transparent p-2 focus:outline-none ${
                state.errors?.lastname ? "border-red-500" : ""
              }`}
            />
            {state.errors?.lastname && (
              <div>
                {state.errors.lastname.map((error) => (
                  <p key={error} className="text-red-500">
                    {error}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

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
      </div>
      <SignUpButton />
      <div className="flex flex-row justify-center gap-x-2">
        <p>Aleadry have an account?</p>
        <Link href={"/login"} className="text-blue-500 hover:underline">
          Login
        </Link>
      </div>
    </form>
  );
}

function SignUpButton() {
  const { pending } = useFormStatus();
  return (
    <button
      aria-disabled={pending}
      disabled={pending}
      className="flex w-full items-center justify-center gap-x-2 rounded-lg  bg-white p-2 text-black transition-all hover:bg-white hover:text-black active:opacity-50"
    >
      {pending ? <ArrowPathIcon className="h-5 w-5 animate-spin" /> : null}
      Sign up
    </button>
  );
}
