import { cookies } from "next/headers";
import { createClient } from "./supabase/serverClient";

export async function getUserByName(id: string) {
  const supabase = createClient(cookies());
  const { data } = await supabase
    .from("profiles")
    .select('*, social_media_links("*")')
    .eq("firstname", id)
    .single();

  return data;
}
