import { cookies } from 'next/headers';
import { COOKIES_ACCESS_TOKEN_KEY } from '../../const/cookies';
import { HttpMethod } from './http.types';

/**
 R - response generic
 P - payload generic
*/
export async function query<R, P = void>(
	url: string = '/',
	method: HttpMethod = 'GET',
	body?: P,
	options?: RequestInit
) {
	// get token from cookies
	const cookieStore = cookies();
	const token = cookieStore.get(COOKIES_ACCESS_TOKEN_KEY);

	const headers = {
		'Content-Type': 'application/json',
		...(token && { Authorization: `Bearer ${token.value}` }),
	};

	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
		method,
		body: JSON.stringify(body),
		headers,
		...options,
	});

	if (!res.ok) {
		console.log(await res.text());
		return null as R;
	}

	const data = await res.json();

	return data as R;
}
