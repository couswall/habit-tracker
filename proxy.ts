import {NextRequest, NextResponse} from 'next/server';

import {ROUTES} from '@/shared/constants/routes';

const PRIVATE_PREFIXES = [ROUTES.DASHBOARD];
const PUBLIC_AUTH_PATHS = [ROUTES.LOGIN, ROUTES.REGISTER];

export const proxy = (request: NextRequest) => {
  const {pathname} = request.nextUrl;
  const hasRefreshToken = request.cookies.has('refresh_token');

  const isPrivate = PRIVATE_PREFIXES.some((prefix) => pathname.startsWith(prefix));
  const isPublicAuth = PUBLIC_AUTH_PATHS.some((path) => pathname === path);

  if (isPrivate && !hasRefreshToken) {
    return NextResponse.redirect(new URL(ROUTES.LOGIN, request.url));
  }

  if (isPublicAuth && hasRefreshToken) {
    return NextResponse.redirect(new URL(ROUTES.DASHBOARD, request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register'],
};
