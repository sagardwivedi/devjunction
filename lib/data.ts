import "server-only";

import { cookies } from "next/headers";

import { PlatformField } from "@/types/definition";
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

  return { id: null, name: null };
}

export async function getUserData() {
  const supabase = createClient(cookies());
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    const id = user.id;

    const { data } = await supabase
      .from("profiles")
      .select("firstname, lastname, email, avatar_url")
      .eq("id", id)
      .single();

    const userData = {
      firstname: data?.firstname || "",
      lastname: data?.lastname || "",
      email: data?.email || "",
      avatar_url: data?.avatar_url || "",
    };

    return { user: userData };
  }

  return { user: null };
}

export async function getUserSocial() {
  const supabase = createClient(cookies());

  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      const userId = user.id;

      const { data } = await supabase
        .from("social_media_links")
        .select("link, platform")
        .eq("user_id", userId);

      if (data) {
        const socialLinks = data.map((link, index) => ({
          id: index + 1,
          link: link.link,
          platform: link.platform,
        }));

        return { social: socialLinks };
      }
    }

    return { social: [] };
  } catch (error) {
    console.error("Error fetching user social media links:", error);
    return { social: [] };
  }
}

export async function fetchPlatforms(): Promise<PlatformField> {
  const supabase = createClient(cookies());

  const { data, error } = await supabase.from("platform").select("id, name");

  if (error || data === null) {
    throw new Error("Failed to fetch platforms");
  }

  return data;
}
