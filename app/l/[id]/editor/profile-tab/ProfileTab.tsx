import { getUserData } from '@/lib/data';
import ProfileForm from './profile-form';

export async function ProfileTab() {
  const { user } = await getUserData();

  return (
    <div className="p-5 md:p-8">
      <div>
        <h1 className="text-2xl font-bold md:text-4xl">Profile Details</h1>
        <p className="mt-2 text-sm text-gray-500">
          Add your details to create a personal touch to your profile.
        </p>
      </div>
      <ProfileForm user={user} />
    </div>
  );
}
