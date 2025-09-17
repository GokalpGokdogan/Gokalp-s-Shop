import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const sessionCookie = request.cookies.get('session');
  const isLoggedIn = !!sessionCookie?.value;

    const protectedRoutes = [
        '/profile',
        '/wishlist',
        '/orders',
    ];

    if (protectedRoutes.some(route => pathname.startsWith(route))) {
        if (!isLoggedIn) {
        return NextResponse.redirect(new URL('/login', request.url));
        }
    }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/profile/:path*',
    '/wishlist/:path*',
    '/orders/:path*',
  ]
};