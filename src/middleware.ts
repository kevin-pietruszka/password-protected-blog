import { NextResponse } from "next/server";
import { auth } from "@/auth";

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|$|auth/.*).*)'],
}

export default auth((req) => {

  const nextUrl = req.nextUrl;
  const pathname = nextUrl.pathname;

  const session = req.auth;
  const user = session?.user;

  if (!user) {
    return NextResponse.redirect(new URL('/auth/signin', nextUrl));
  }

  if (pathname.startsWith('/blog')) {
    if (user.name === 'user' || user.name === 'admin') {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/auth/signin', nextUrl));
    }
  }

  if (pathname.startsWith('/dashboard')) {
    if (user.name === 'admin') {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL('/auth/signin', nextUrl));
    }
  }
  return NextResponse.next();
});
