import "server-only";
import { createClient } from "./supabase/serverClient";
import { cookies } from "next/headers";

export async function getUserId() {
  const supabase = createClient(cookies());
  const { data } = await supabase.auth.getUser();
  const id = data.user?.id;
  const { firstname } = data.user?.user_metadata as { firstname: string };
  return { id, name: firstname };
}
