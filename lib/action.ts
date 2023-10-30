"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { object, string } from "zod";
import { createClient } from "./supabase/serverClient";

type State = {
  errors?: {
    firstname?: string[];
    lastname?: string[];
  };
  message?: string | null;
};

const ProfileSchema = object({
  firstname: string().min(1),
  lastname: string().min(1),
});

export async function updateProfile(prevState: State, formData: FormData) {
  const validate = ProfileSchema.safeParse({
    firstname: formData.get("firstName"),
    lastname: formData.get("lastName"),
  });

  if (!validate.success) {
    return {
      errors: validate.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Save Data.",
    };
  }

  const { firstname, lastname } = validate.data;
  const supabase = createClient(cookies());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  try {
    if (user) {
      await supabase
        .from("profiles")
        .update({ firstname, lastname })
        .eq("id", user.id);
    }
  } catch (error) {
    return {
      message: "Database Error: Failed to Save Data.",
    };
  }

  const { data } = await supabase
    .from("profiles")
    .select("firstname")
    .eq("id", user?.id || "")
    .single();

  redirect(`/dashboard/${data?.firstname}/editor`);
}
