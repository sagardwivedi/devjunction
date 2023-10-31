import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ImageSelector } from "./ImageSelector";

function PersonalInfo() {
  return (
    <div className="px-2 py-4">
      <div className="space-y-4">
        <div className="flex flex-col gap-y-2 md:flex-row justify-between">
          <Label htmlFor="first">First name*</Label>
          <Input
            placeholder="Enter your first name"
            className="md:w-[60%]"
            id="first"
            name="firstname"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 md:flex-row justify-between">
          <Label htmlFor="last">Last name*</Label>
          <Input
            placeholder="Enter your last name"
            className="md:w-[60%]"
            name="lastname"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 md:flex-row justify-between">
          <Label htmlFor="email">Email</Label>
          <Input
            placeholder="Enter your email"
            id="email"
            name="Email"
            type="email"
            className="md:w-[60%]"
          />
        </div>
      </div>
    </div>
  );
}

export default function ProfileTab() {
  return (
    <form action={"/api/profile/save"} className="md:px-8 p-4 md:py-12">
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
            <Button variant={"secondary"} className="mt-5">
              Save
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
