"use server"; // Assuming this directive is valid in your project setup

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { object, string } from "zod";

import { getUserId } from "../data";
import { createClient } from "../supabase/serverClient";

export type State = {
  errors?: { link?: string[]; platform?: string[] };
  message?: string | null;
};

const LinkSchema = object({
  id: string().array(),
  link: string().url().array(),
  platform: string().array(),
});

const SaveSchema = LinkSchema;

export async function linksSaveAction(prevState: State, formData: FormData) {
  const { id, name } = await getUserId();

  const validate = SaveSchema.safeParse({
    id: formData.getAll("Id"),
    link: formData.getAll("Link"),
    platform: formData.getAll("Platform"),
  });

  if (!validate.success) {
    return {
      errors: validate.error.flatten().fieldErrors,
      message: "Fix errors",
    };
  }

  // Successful validation
  const links = validate.data.link.map((link, index) => ({
    link,
    platform: validate.data.platform[index],
    user_id: id || "",
  }));

  const supabase = createClient(cookies());
  const { error } = await supabase.from("social_media_links").insert(links);

  if (error) {
    return {
      message: error.message,
      errors: {}, // Clear any previous errors if necessary
    };
  }

  // Perform revalidation and redirection
  revalidatePath(`/l/${name}/editor`);
  redirect(`/l/${name}/editor`);
}
