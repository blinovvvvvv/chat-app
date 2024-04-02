import { NextRequest } from 'next/server';
import { COOKIES_ACCESS_TOKEN_KEY } from './src/shared/const/cookies';

export async function middleware(request: NextRequest) {
	const accessToken = request.cookies.get(COOKIES_ACCESS_TOKEN_KEY)?.value;

	if (accessToken && request.nextUrl.pathname === '/') {
		return Response.redirect(new URL('/feed', request.url));
	}

	if (!accessToken && request.nextUrl.pathname !== '/') {
		return Response.redirect(new URL('/', request.url));
	}
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
