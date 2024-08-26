import { NextRequest, NextResponse } from 'next/server'

const publicRoutes = ['/login']
 
export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);

  if (isPublicRoute) {
    return NextResponse.next();
  }
 
  const hasCookie = req.cookies.has(process.env.PASSWORD_COOKIE!);

  if (!hasCookie) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }
 
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}

