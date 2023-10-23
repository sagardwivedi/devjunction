import { useProfileStore } from "@/hooks/useProfileStore";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Image from "next/image";
import { ChangeEvent, useRef } from "react";
import { PiImage } from "react-icons/pi";

function ImageSelector() {
  const { updateProfile, profile } = useProfileStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  console.log("Profile", profile.image);

  const openImageSelector = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files && event.target.files[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      console.log("Image Link", imageUrl);
      updateProfile({ image: imageUrl });
    }
  };

  return (
    <div className="bg-neutral-50 px-2 py-4">
      <div className="flex flex-row justify-between items-center">
        <div className="text-gray-500">Profile Picture</div>
        <div className="flex flex-row items-center gap-x-4">
          <div
            className="h-[200px] w-[200px] relative cursor-pointer"
            onClick={openImageSelector}
          >
            {profile.image ? (
              <>
                <Image
                  src={profile.image}
                  fill
                  alt=""
                  className="object-cover rounded-lg"
                />
                <div className="bg-black/30 rounded-lg flex-col text-white absolute h-full flex justify-center items-center w-full">
                  <PiImage size={35} />
                  <p>Change Image</p>
                </div>
              </>
            ) : (
              <div className="h-full w-full bg-gray-200 rounded-lg" />
            )}
            <input
              type="file"
              ref={fileInputRef}
              accept="image/jpeg, image/png, image/bmp"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>
          <div className="text-gray-500">
            <p>Image must be below 1024x1024px.</p>
            <p>Use PNG, JPG or BMP format.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PersonalInfo() {
  const { profile, updateProfile } = useProfileStore();

  return (
    <div className="bg-neutral-50 px-2 py-4">
      <div className="space-y-4">
        <div className="flex flex-row justify-between">
          <p className="text-neutral-500">First name*</p>
          <Input
            placeholder="Enter your first name"
            className="w-[60%]"
            variant="bordered"
            radius="sm"
            value={profile.firstName}
            onChange={(e) => updateProfile({ firstName: e.target.value })}
          />
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-neutral-500">Last name*</p>
          <Input
            placeholder="Enter your last name"
            className="w-[60%]"
            variant="bordered"
            radius="sm"
            value={profile.lastName}
            onChange={(e) => updateProfile({ lastName: e.target.value })}
          />
        </div>
        <div className="flex flex-row justify-between">
          <p className="text-neutral-500">Email</p>
          <Input
            placeholder="Enter your email"
            type="email"
            className="w-[60%]"
            variant="bordered"
            radius="sm"
            value={profile.email}
            onChange={(e) => updateProfile({ email: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

const ProfileTab = () => {
  return (
    <div className="px-8 py-10 h-full">
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-8 mb-8">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-neutral-800 ">
              Profile Details
            </h1>
            <p>Add your details to create a personal touch to your profile.</p>
          </div>
          <ImageSelector />
          <PersonalInfo />
        </div>
        <div>
          <div className="mt-5 flex border-t border-neutral-300 justify-end">
            <Button className="mt-5" size="md" radius="sm">
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
