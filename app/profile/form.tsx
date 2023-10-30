"use client";

import { useFormState, useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updateProfile } from "@/lib/action";

export const Details = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(updateProfile, initialState);

  return (
    <form action={dispatch} className="space-y-5">
      <div>
        <Label htmlFor="first">First Name</Label>
        <Input id="first" name="firstName" />
        {state.errors?.firstname ? (
          <div
            id="first-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-500"
          >
            {state.errors.firstname.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
      </div>
      <div>
        <Label htmlFor="last">Last Name</Label>
        <Input id="last" name="lastName" />
        {state.errors?.lastname ? (
          <div
            id="last-error"
            aria-live="polite"
            className="mt-1 text-sm text-red-500"
          >
            {state.errors.lastname.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        ) : null}
        {state.message ? (
          <div className="mt-1 text-sm text-red-500" aria-live="polite">
            <p>{state.message}</p>
          </div>
        ) : null}
      </div>
      <SaveButton />
    </form>
  );
};

function SaveButton() {
  const { pending } = useFormStatus();

  return <Button aria-disabled={pending}>Save Details</Button>;
}
