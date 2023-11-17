"use client";

import { useFormState, useFormStatus } from "react-dom";

import { profileSaveAction } from "@/lib/actions/crudAction";
import { UserProfile } from "@/types/definition";
import { ImageSelector } from "./ImageSelector";

export function ProfileForm({ user }: { user: UserProfile | null }) {
  const [state, action] = useFormState(profileSaveAction, undefined);

  return (
    <form action={action} className="space-y-5">
      <div className="rounded-md bg-gray-50 px-2 py-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-gray-500">Profile Picture</p>
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <ImageSelector />
            <p className="text-gray-500">
              Image must be below 1024x1024.
              <br /> Use PNG, JPG and BMP format.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-5 rounded-md bg-gray-50 px-2 py-4">
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <label className="flex-1 text-gray-500" htmlFor="firstname">
            First name*
          </label>
          <input
            type="text"
            name="firstName"
            id="firstname"
            className="w-full rounded-md max-md:mt-1 md:w-[60%]"
            defaultValue={user?.firstname}
          />
        </div>
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <label className="flex-1 text-gray-500" htmlFor="lastname">
            Last name*
          </label>
          <input
            type="text"
            name="lastName"
            id="lastname"
            className="w-full rounded-md max-md:mt-1 md:w-[60%]"
            defaultValue={user?.lastname}
          />
        </div>
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <label className="flex-1 text-gray-500" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="Email"
            id="email"
            className="w-full rounded-md max-md:mt-1 md:w-[60%]"
            defaultValue={user?.email}
          />
        </div>
      </div>
      <SaveButton />
    </form>
  );
}

function SaveButton() {
  const { pending } = useFormStatus();

  return (
    <div className="flex justify-end border-t border-gray-500 pt-5">
      <button
        className="rounded-md bg-black px-5 py-2 text-white"
        disabled={pending}
      >
        Save
      </button>
    </div>
  );
}
