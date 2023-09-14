/* eslint-disable import/prefer-default-export */
import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  // Add any assets or page that you don't want to run middleware on
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.startsWith('/api/')
  ) {
    return NextResponse.next();
  }

  const token = await getToken({ req });

  // if token exists, user is authorized
  if (token?.githubHandle) {
    // authorized user should be moved to his ticket edit page from anywhere
    if (pathname.endsWith(`/ticket/${token.githubHandle}`)) {
      return NextResponse.redirect(
        new URL(`${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}/ticket/${token.githubHandle}/edit`)
      );
    }
  } else if (pathname.endsWith(`/edit`)) {
    if (!token?.githubHandle) {
      return NextResponse.redirect(
        new URL(
          `${process.env.NEXT_PUBLIC_DEFAULT_SITE_URL}${pathname.split('/').slice(0, -1).join('/')}`
        )
      );
    }
  }

  return NextResponse.next();
}
