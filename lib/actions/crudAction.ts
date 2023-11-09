"use server";

import { cookies } from "next/headers";
import { array, object, string } from "zod";
import { getUserId } from "../data";
import { createClient } from "../supabase/serverClient";

const linkSchema = object({
  id: string(),
  links: string().url(),
  platform: string(),
});

const linksArraySchema = array(linkSchema);

export async function linksSaveAction(prevState: any, formData: FormData) {
  const ids = Array.from(formData.getAll("Id"));

  const rawData = ids.map((id) => ({
    id,
    links: String(formData.get(`Link-${id}`)) || "",
    platform: String(formData.get(`Platform-${id}`)) || "",
  }));

  const validation = linksArraySchema.safeParse(rawData);

  if (!validation.success) {
    return {
      errors: validation.error.flatten().fieldErrors,
      message: validation.error.flatten().formErrors,
    };
  }

  const { id } = await getUserId();
  const supabase = createClient(cookies());
  const links = rawData.map((data) => ({
    link: data.links,
    platform: data.platform,
    user_id: id || "",
  }));

  const { error } = await supabase.from("social_media_links").insert(links);
  if (error) {
    return {
      message: error.message,
    };
  }
}
