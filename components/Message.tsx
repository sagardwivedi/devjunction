"use client";

import { useSearchParams } from "next/navigation";

export function Messsage() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");

  return <div className="text-sm text-red-500 mt-5">{message}</div>;
}
