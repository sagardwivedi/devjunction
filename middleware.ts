import { NextResponse, type NextRequest } from 'next/server';

import { createClient } from '@/lib/supabase/middlewareClinet';

export async function middleware(request: NextRequest) {
  const { response, supabase } = createClient(request);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return response;
}

export const config = {
  matcher: ['/l/:path*'],
};
