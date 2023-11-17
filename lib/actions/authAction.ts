"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { object, string } from "zod";

import { createClient } from "@/lib/supabase/serverClient";

const AuthSchema = object({
  email: string().email(),
  password: string().min(8),
  firstname: string().min(3),
  lastname: string().min(3),
});

const LoginSchema = AuthSchema.omit({ firstname: true, lastname: true });

export async function loginAction(formData: FormData) {
  const validate = LoginSchema.safeParse({
    email: formData.get("Email") as string,
    password: formData.get("Password") as string,
  });

  if (!validate.success) {
    const errorMessage = "Please check your inputs.";
    return redirect(`/login?message=${encodeURIComponent(errorMessage)}`);
  }

  const { email, password } = validate.data;

  const supabase = createClient(cookies());

  const {
    error,
    data: { user },
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || user === null) {
    return redirect(`/login?message=Failed to authenticate`);
  }

  const { firstname } = user.user_metadata as {
    firstname: string;
  };

  redirect(`/l/${firstname}`);
}

export async function signupAction(formData: FormData) {
  const origin = headers().get("origin");

  const validate = AuthSchema.safeParse({
    firstname: formData.get("firstName") as string,
    lastname: formData.get("lastName") as string,
    email: formData.get("Email") as string,
    password: formData.get("Password") as string,
  });

  if (!validate.success) {
    const errorMessage = "Please check your inputs.";
    return redirect(`/signup?message=${encodeURIComponent(errorMessage)}`);
  }

  const { email, firstname, lastname, password } = validate.data;

  const supabase = createClient(cookies());

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { firstname: firstname, lastname: lastname },
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return redirect(`/signup?message=Failed to authenticate`);
  }

  return redirect("/signup?message=Check email to continue sign in process");
}
