"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .refine((value) => passwordPattern.test(value), {
      message:
        "Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character",
    }),
});

export function SignInForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(JSON.stringify(values, null, 2));
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-[90%] max-w-md space-y-8"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-sans text-primary">Email</FormLabel>
              <FormControl>
                <Input placeholder="mine@gmail.com" {...field} />
              </FormControl>
              <FormMessage className="font-sans" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-sans text-primary">Password</FormLabel>
              <FormControl>
                <Input placeholder="*******" type="password" {...field} />
              </FormControl>
              <FormMessage className="font-sans" />
            </FormItem>
          )}
        />
        <div className="flex flex-col  gap-y-4">
          <Button
            type="submit"
            className="rounded-md bg-primary px-4 py-2 font-sans text-secondary hover:bg-secondary hover:text-black"
          >
            Log In
          </Button>
          <Button
            type="submit"
            className="rounded-md bg-primary px-4 py-2 font-sans text-secondary hover:bg-secondary hover:text-black"
          >
            Sign Up
          </Button>
        </div>
      </form>
    </Form>
  );
}
