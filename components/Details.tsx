'use client';

import { ArrowRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import Link from 'next/link';

import { useMultipleInput } from '@/hooks/use-multiple-input';
import { useProfile } from '@/hooks/use-profile';
import { Link as LinkType } from '@/types/definition';

function LinkCard({ link, platform }: LinkType) {
  if (link.length === 0 || platform.length === 0) {
    return <div className="h-10 w-full rounded-md bg-gray-200"></div>;
  }

  return (
    <Link
      href={link}
      className="group flex flex-row justify-between rounded-md px-3 py-2"
    >
      <p>{platform}</p>
      <ArrowRightIcon className="h-6 w-6 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function Details() {
  const { inputFields: links } = useMultipleInput();
  const {
    data: { email, firstname, lastname, avatar_url },
  } = useProfile();

  const fullName = !firstname && !lastname;

  return (
    <div className="flex h-full flex-col items-center space-y-5 py-5">
      <div className="flex flex-col items-center justify-center gap-3">
        {avatar_url ? (
          <Image
            src={avatar_url}
            alt=""
            width={150}
            height={150}
            className="rounded-full"
          />
        ) : (
          <div className="h-[150px] w-[150px] rounded-full bg-gray-200"></div>
        )}
        <div className="flex flex-col items-center justify-center gap-2">
          {!fullName ? (
            <h2>
              {firstname}
              {lastname}
            </h2>
          ) : (
            <h2 className="h-5 w-40 rounded-md bg-gray-200"></h2>
          )}
          {email ? (
            <p>{email}</p>
          ) : (
            <p className="h-4 w-28 rounded-md bg-gray-200"></p>
          )}
        </div>
      </div>
      <div className="w-[85%] space-y-2">
        {links.map((link) => (
          <LinkCard {...link} key={link.id} />
        ))}
      </div>
    </div>
  );
}
