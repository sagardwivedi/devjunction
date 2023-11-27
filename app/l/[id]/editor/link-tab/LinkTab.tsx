import { fetchPlatforms, getUserSocial } from '@/lib/data';
import { Suspense } from 'react';
import { Form } from './Form';

export async function LinkTab() {
  const platforms = await fetchPlatforms();
  const { social } = await getUserSocial();

  return (
    <div className="p-5 md:p-8">
      <div>
        <h1 className="text-2xl font-bold md:text-5xl">Customize your links</h1>
        <p className="mt-2 text-sm text-gray-500">
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
      </div>
      <div>
        <Suspense>
          <Form platforms={platforms} social={social} />
        </Suspense>
      </div>
    </div>
  );
}
