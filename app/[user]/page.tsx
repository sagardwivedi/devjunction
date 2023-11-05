import { getUserByName } from "@/lib/data";
import { createClient } from "@/lib/supabase/serverClient";
import { cookies } from "next/headers";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function GeneralPeopleView({
  params,
}: {
  params: { user: string };
}) {
  const data = await getUserByName(params.user);

  return (
    <div className="flex justify-center items-center">
      <div>{JSON.stringify(data, null, 2)}</div>
    </div>
  );
}
