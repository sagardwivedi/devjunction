"use server";

import { cookies } from "next/headers";
import { array, object, string, z } from "zod";
import { getUserId } from "../data";
import { createClient } from "../supabase/serverClient";
import { revalidatePath } from "next/cache";

const platform = z.enum(["Github", "Stack Overflow"]);

const linkSchema = object({
  id: string(),
  links: string().url(),
  platform: platform,
});

type PlatformEnum = z.infer<typeof platform>;

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
    platform: data.platform as PlatformEnum,
    user_id: id || "",
  }));

  const { error } = await supabase.from("social_media_links").insert(links);

  if (error) {
    return {
      message: error.message,
    };
  }

  revalidatePath("/");
}

export async function profileSaveAction(prevState: any, formData: FormData) {}
