'use client';

import { LinkIcon } from '@heroicons/react/20/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function ClinetTab({ tab }: { tab: string }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const path = usePathname();

  function handleClick(id: string) {
    const params = new URLSearchParams(searchParams);
    params.set('tab', id);
    replace(`${path}?${params.toString()}`);
  }

  return (
    <div className="flex flex-row items-center gap-x-3 md:gap-x-5">
      <button
        onClick={() => handleClick('link')}
        className={`flex flex-row items-center gap-x-2 rounded-md px-4 py-2 hover:bg-gray-100 ${
          tab === 'link' ? 'bg-gray-200' : ''
        }`}
      >
        <LinkIcon className="h-6 w-6" />
        <p className="max-md:hidden">Links</p>
      </button>
      <button
        onClick={() => handleClick('profile')}
        className={`flex flex-row items-center gap-x-2 rounded-md px-4 py-2 hover:bg-gray-100 ${
          tab !== 'link' ? 'bg-gray-200' : ''
        }`}
      >
        <UserCircleIcon className="h-6 w-6" />
        <p className="max-md:hidden">Profile Details</p>
      </button>
    </div>
  );
}
