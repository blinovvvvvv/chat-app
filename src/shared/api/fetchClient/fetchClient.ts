import { cookies } from 'next/headers';
import { COOKIES_ACCESS_TOKEN_KEY } from '../../const/cookies';
import { HttpMethod } from './http.types';

const getContentTypeHeader = {
	'Content-Type': 'application/json',
};

/**
 R - response generic
 P - payload generic
*/
export async function fetchClient<R, P = void>(
	url: string = '/',
	method: HttpMethod = 'GET',
	body?: P,
	auth?: boolean,
	options?: RequestInit
) {
	// JWT Access Token
	let token: string = '';

	if (auth) {
		// get token from cookies
		const cookiesToken = cookies().get(COOKIES_ACCESS_TOKEN_KEY);

		if (!cookiesToken) throw new Error('Unauthorized');
		token = `Bearer ${cookiesToken}`;
	}

	// request headers
	const headers: Record<string, string> = auth
		? { Authorization: token, ...getContentTypeHeader }
		: getContentTypeHeader;

	const res = await fetch(`${process.env.API_URL}${url}`, {
		method,
		body: JSON.stringify(body),
		headers,
		...options,
	});

	if (!res.ok) throw new Error(res.statusText);

	const data = await res.json();

	return data as R;
}
