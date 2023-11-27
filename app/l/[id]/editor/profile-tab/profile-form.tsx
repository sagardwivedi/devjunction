'use client';

import { useFormState } from 'react-dom';
import { useEffect } from 'react';

import { SaveButton } from '@/components/butons';
import { ImageSelector } from './image-selector';
import { saveProfile } from '@/lib/actions/crudAction';
import { useProfile } from '@/hooks/use-profile';

export default function ProfileForm({
  user,
}: {
  user: {
    firstname: string;
    lastname: string;
    email: string;
    avatar_url: string;
  } | null;
}) {
  const initialState = { errors: {}, message: '' };
  const [state, action] = useFormState(saveProfile, initialState);
  const { data, update } = useProfile();

  useEffect(() => {
    if (user !== null) {
      update(user);
    }
  }, [user, update]);

  return (
    <form action={action} className="mt-8 space-y-8">
      <div className="flex flex-col items-center justify-between rounded-md bg-gray-50 p-4 md:flex-row">
        <p className="text-gray-500">Profile Image</p>
        <ImageSelector />
        <p className="text-sm text-gray-500">
          Image must be below 1024x1024px <br />
          Use PNG,JPG or BMP format.
        </p>
      </div>
      <div className="space-y-8 rounded-md bg-gray-50 p-5">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <label className="text-gray-500" htmlFor="firstname">
            First name*
          </label>
          <input
            type="text"
            name="Firstname"
            id="firstname"
            className="w-full rounded-md md:w-[60%]"
            value={data.firstname}
            onChange={(e) => update({ firstname: e.target.value })}
          />
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <label className="text-gray-500" htmlFor="latname">
            Last name*
          </label>
          <input
            type="text"
            name="Latname"
            id="latname"
            className="w-full rounded-md md:w-[60%]"
            value={data.lastname}
            onChange={(e) => update({ lastname: e.target.value })}
          />
        </div>
        <div className="flex flex-col items-center justify-between md:flex-row">
          <label className="text-gray-500" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="Email"
            id="email"
            className="w-full rounded-md md:w-[60%]"
            value={data.email}
            onChange={(e) => update({ email: e.target.value })}
          />
        </div>
      </div>
      <div className="flex justify-end border-t border-gray-500 pl-2 pt-5">
        <SaveButton />
      </div>
    </form>
  );
}
