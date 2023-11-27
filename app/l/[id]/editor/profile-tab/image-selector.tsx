'use client';

import { PhotoIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { ChangeEvent, useRef } from 'react';

import { useProfile } from '@/hooks/use-profile';

export const ImageSelector = () => {
  const { data, update } = useProfile();
  const fileRef = useRef<HTMLInputElement>(null);

  const handleClick = () => fileRef.current?.click();

  const handleImageSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      // Check image size
      if (file.size > 1024 * 1024) {
        alert('Image size must be below 1024x1024px.');
        return;
      }

      const imageUrl = URL.createObjectURL(file);
      update({ avatar_url: imageUrl });
    }
  };

  const containerStyle = `relative h-[200px] w-[200px] cursor-pointer rounded-md overflow-hidden bg-gray-200 ${
    data.avatar_url ? 'hover:bg-gray-300' : ''
  }`;
  const overlayStyle = 'absolute inset-0 bg-black/50';

  const renderSelectedImage = ({ photo }: { photo: string }) => (
    <div>
      <Image
        src={photo}
        alt="Selected Profile Image"
        width={200}
        height={200}
        className="overflow-hidden"
      />
    </div>
  );

  return (
    <div onClick={handleClick} className={containerStyle}>
      {data.avatar_url && <div className={overlayStyle}></div>}

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <PhotoIcon
          className={`h-8 w-8 ${data.avatar_url ? 'text-white' : ''}`}
        />
        <p>
          {data.avatar_url ? (
            <span className="text-white">Change Image</span>
          ) : (
            'Select Image'
          )}
        </p>
      </div>

      <input
        type="file"
        accept="image/*"
        hidden
        ref={fileRef}
        onChange={handleImageSelect}
      />

      {data.avatar_url && renderSelectedImage({ photo: data.avatar_url })}
    </div>
  );
};
