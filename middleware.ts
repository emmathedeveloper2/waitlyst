// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

  if (request.headers.get('accept') == 'text/x-component')
    return NextResponse.next();

  const headers = new Headers(request.headers);
  headers.set('x-url', request.url); // Set the full URL
  headers.set('x-base-url', request.nextUrl.origin); // Set just the origin (base URL)

  return NextResponse.next({
    headers,
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};