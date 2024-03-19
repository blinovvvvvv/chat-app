import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
	const accessToken = request.cookies.get('accessToken')?.value;
	const url = request.nextUrl.clone();
	url.pathname = '/feed';

	if (accessToken) {
		return NextResponse.rewrite(url);
	}
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
