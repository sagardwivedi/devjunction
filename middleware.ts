import { NextResponse, type NextRequest } from "next/server";

import { createClient } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (session && request.nextUrl.pathname === "/l") {
    return NextResponse.redirect(
      new URL(`/l/${session.user.user_metadata.firstname}`, request.url),
    );
  }

  return response;
}

export const config = {
  matcher: ["/l/:path*"],
};
