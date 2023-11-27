'use client';

import { useSearchParams } from 'next/navigation';

export function Messsage() {
  const searchParams = useSearchParams();
  const message = searchParams.get('message');

  return <div className="mt-5 text-sm text-red-500">{message}</div>;
}
