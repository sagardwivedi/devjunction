"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { object, string } from "zod";
import { createClient } from "../supabase/serverClient";

type State = {
  errors?: {
    firstname?: string[];
    lastname?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

const AuthSchema = object({
  email: string().email(),
  password: string().min(8),
  firstname: string().min(3),
  lastname: string().min(3),
});

const LoginSchema = AuthSchema.omit({ firstname: true, lastname: true });

export async function loginAction(prevState: State, formData: FormData) {
  const validate = LoginSchema.safeParse({
    email: formData.get("Email"),
    password: formData.get("Password"),
  });

  if (!validate.success) {
    return {
      errors: validate.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Login.",
    };
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
    return { message: "Failed to authenticate" };
  }

  const { firstname } = user.user_metadata as {
    firstname: string;
  };

  redirect(`/l/${firstname.toLowerCase()}`);
}

export async function signupAction(prevState: State, formData: FormData) {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://devjunction.vercel.app/";

  const validate = AuthSchema.safeParse({
    firstname: formData.get("firstName"),
    lastname: formData.get("lastName"),
    email: formData.get("Email"),
    password: formData.get("Password"),
  });

  if (!validate.success) {
    return {
      errors: validate.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Sign up.",
    };
  }

  const { email, firstname, lastname, password } = validate.data;

  const supabase = createClient(cookies());

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { firstname: firstname, lastname: lastname },
      emailRedirectTo: `${url}/auth/callback`,
    },
  });

  if (error) {
    return { message: "Could not authenticate user" };
  }

  return { message: "Check email to continue sign in process" };
}
