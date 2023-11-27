'use server';

import { cookies } from 'next/headers';
import { object, string } from 'zod';

import { getUserId } from '../data';
import { createClient } from '../supabase/serverClient';

const LinksSchema = object({
  id: string(),
  platform: string({ invalid_type_error: 'Select a platform' }),
  link: string().url(),
}).array();

type State =
  | {
      errors?: { id?: number; platform?: string; link?: string }[];
      message: string;
    }
  | undefined;

export async function saveLinks(prevState: State, formData: FormData) {
  const ids = formData.getAll('ID') as string[];
  const rawData = ids.map((id) => ({
    id,
    platform: formData.get(`Platform-${id}`) as string,
    link: formData.get(`Link-${id}`) as string,
  }));

  const validation = LinksSchema.safeParse(rawData);

  if (!validation.success) {
    const errors = validation.error.flatten().fieldErrors;
    const transformedErrors = Object.keys(errors)?.map((key) => {
      const id = parseInt(key) + 1;
      const platform = errors?.[+key]?.[0];
      const link = errors?.[+key]?.[1];

      return { id, platform, link };
    });

    return { errors: transformedErrors, message: 'Check the inputs' };
  }

  const { id: user_id } = await getUserId();

  const datas = validation.data.map((d) => ({
    id: parseInt(d.id),
    platform: d.platform,
    link: d.link,
    user_id: user_id ?? '',
  }));

  const supabase = createClient(cookies());

  const { error } = await supabase.from('social_media_links').upsert(datas);

  if (error) {
    return {
      errors: [],
      message: error.message || 'Your changes have been successfully saved!',
    };
  }
}

export async function deleteLink(id: number) {
  const supabase = createClient(cookies());
  const { id: user_id } = await getUserId();

  try {
    await supabase
      .from('social_media_links')
      .delete()
      .eq('id', id)
      .eq('user_id', user_id || '');

    return { message: 'Deleted Invoice.' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}

const ProfileSchema = object({
  firstname: string(),
  lastname: string(),
  email: string().email(),
});

type ProfileState =
  | {
      errors: {
        firstname?: string[] | undefined;
        lastname?: string[] | undefined;
        email?: string[] | undefined;
      };
      message: string;
    }
  | undefined;

export async function saveProfile(prevState: ProfileState, formData: FormData) {
  const validation = ProfileSchema.safeParse({
    firsname: formData.get('Firstname'),
    lastname: formData.get('Lastname'),
    email: formData.get('Email'),
  });

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
      message: 'Please check inpurs',
    };
  }

  const supabase = createClient(cookies());
  const { error } = await supabase.from('profiles').update(validation.data);

  if (error) {
    return {
      errors: {},
      message: error.message,
    };
  }
}
