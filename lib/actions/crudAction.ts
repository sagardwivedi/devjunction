"use server";

import { object, string } from "zod";

export type State = {
  errors?: {
    link?: string[];
    platform?: string[];
  };
  message?: string | null;
};

const LinkSchema = object({
  link: string().url(),
  platform: string(),
});

export async function linksSaveAction(prevState: State, formData: FormData) {
  const validate = LinkSchema.safeParse({
    link: formData.getAll("Link"),
    platform: formData.getAll("Platform"),
  });

  if (!validate.success) {
    return {
      errors: validate.error.flatten().fieldErrors,
      message: "Fix errors",
    };
  }

  console.log(JSON.stringify(validate.data));
}
