'use client'

import { ChangeEvent, useRef } from "react";

export function ImageSelector() {
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
    <div className="md:px-2 md:py-4">
      <div className="flex flex-col max-md:gap-y-2 md:flex-row items-center justify-between">
        <div>Profile Picture</div>
        <div className="flex flex-col max-md:gap-y-4 md:flex-row items-center gap-x-4">
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
          <div className="text-center md:text-start">
            <p>Image must be below 1024x1024px.</p>
            <p>Use PNG, JPG or BMP format.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
