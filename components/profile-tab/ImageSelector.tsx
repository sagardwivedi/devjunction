"use client";

import { PhotoIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

export const ImageSelector = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const InputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedImage(url);
    }
  };

  const handleClick = () => {
    if (InputRef.current) {
      InputRef.current.click();
    }
  };

  return (
    <div
      onClick={handleClick}
      className="flex h-48 w-48 cursor-pointer flex-col items-center justify-center rounded-md bg-gray-200"
    >
      <input
        type="file"
        ref={InputRef}
        // accept="image/png, image/jpg, image/bmp"
        hidden
        onChange={handleImageChange}
      />
      {selectedImage && (
        <div className="relative">
          <Image
            src={selectedImage}
            alt="profile photo"
            width={192}
            height={192}
            className="rounded-md bg-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-md bg-black/50 text-white">
            <PhotoIcon className="h-8 w-8" />
            <p>Change photo</p>
          </div>
        </div>
      )}
      {!selectedImage && (
        <div className="flex flex-col items-center justify-center">
          <PhotoIcon className="h-8 w-8" />
          <p>Select photo</p>
        </div>
      )}
    </div>
  );
};
