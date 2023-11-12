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
      className="cursor-pointer flex justify-center items-center flex-col rounded-md w-48 h-48 bg-gray-200"
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
          <div className="bg-black/50 inset-0 absolute text-white flex justify-center items-center flex-col rounded-md">
            <PhotoIcon className="w-8 h-8" />
            <p>Change photo</p>
          </div>
        </div>
      )}
      {!selectedImage && (
        <div className="flex flex-col justify-center items-center">
          <PhotoIcon className="w-8 h-8" />
          <p>Select photo</p>
        </div>
      )}
    </div>
  );
};
