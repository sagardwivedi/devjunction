import { getUserData } from "@/lib/data";
import { ProfileForm } from "./profile-form";

export async function ProfileTab() {
  const { user } = await getUserData();
  return (
    <div className="px-5 py-4 md:px-8 md:py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-xl font-semibold md:text-6xl">Profile Details</h1>
          <p className="mt-4 text-base text-gray-500">
            Add your details to create personal touch to your profile
          </p>
        </div>
        <ProfileForm user={user} />
      </div>
    </div>
  );
}
