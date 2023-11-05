import { cookies, headers } from "next/headers";
import { NextResponse } from "next/server";

import { createClient } from "@/lib/supabase/serverClient";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const supabase = createClient(cookies());

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  return NextResponse.redirect("/l");
}
