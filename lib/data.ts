import "server-only";

import { cookies } from "next/headers";

import { createClient } from "./supabase/serverClient";

export async function getUserId() {
  const supabase = createClient(cookies());
  const { data } = await supabase.auth.getUser();

  if (data.user) {
    const id = data.user.id;
    const userMetadata = data.user.user_metadata;

    if (userMetadata) {
      const { firstname } = userMetadata as { firstname: string };
      return { id, name: firstname };
    }
  }

  // Handle the case when user or user_metadata is undefined
  return { id: null, name: null };
}
