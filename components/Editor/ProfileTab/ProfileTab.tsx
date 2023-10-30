"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { updateProfile } from "@/lib/action";
import { ChangeEvent, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";

function ImageSelector() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const openImageSelector = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
    }
  };

  return (
    <div className="px-2 py-4">
      <div className="flex flex-row items-center justify-between">
        <div>Profile Picture</div>
        <div className="flex flex-row items-center gap-x-4">
          <div
            className="relative bg-gray-500 rounded-md h-[200px] w-[200px] cursor-pointer"
            onClick={openImageSelector}
          >
            <input
              type="file"
              ref={fileInputRef}
              accept="image/jpeg, image/png, image/bmp"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
          <div>
            <p>Image must be below 1024x1024px.</p>
            <p>Use PNG, JPG or BMP format.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonalInfo() {
  return (
    <div className="px-2 py-4">
      <div className="space-y-4">
        <div className="flex flex-row justify-between">
          <p>First name*</p>
          <Input
            placeholder="Enter your first name"
            className="w-[60%]"
            required
          />
        </div>
        <div className="flex flex-row justify-between">
          <p>Last name*</p>
          <Input
            placeholder="Enter your last name"
            className="w-[60%]"
            required
          />
        </div>
        <div className="flex flex-row justify-between">
          <p>Email</p>
          <Input
            placeholder="Enter your email"
            type="email"
            className="w-[60%]"
          />
        </div>
      </div>
    </div>
  );
}

export default function ProfileTab() {

  return (
    <form className="h-full px-8 py-10">
      <div className="flex h-full flex-col justify-between">
        <div className="mb-8 space-y-8">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold">Profile Details</h1>
            <p>Add your details to create a personal touch to your profile.</p>
          </div>
          <ImageSelector />
          <PersonalInfo />
        </div>
        <div>
          <div className="mt-5 flex justify-end border-t border-neutral-300">
            <SaveButton />
          </div>
        </div>
      </div>
    </form>
  );
}

function SaveButton() {
  const { pending } = useFormStatus();
  return (
    <Button className="mt-5" aria-disabled={pending}>
      Save
    </Button>
  );
}
