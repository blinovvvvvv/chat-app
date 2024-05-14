import { cookies } from 'next/headers';
import { COOKIES_ACCESS_TOKEN_KEY } from '../../const/cookies';
import { HttpMethod } from './http.types';

interface QueryOptions extends RequestInit {
	file?: boolean;
}

interface QueryProps<P> {
	url: string;
	method?: HttpMethod;
	body?: P;
	options?: QueryOptions;
	auth?: boolean;
}

/**
 R - response generic
 P - payload generic
*/
export async function query<R, P = void>({
	url = '/',
	method = 'GET',
	body,
	options,
	auth,
}: QueryProps<P>) {
	// get token from cookies
	const token = auth ? cookies().get(COOKIES_ACCESS_TOKEN_KEY) : '';

	const headers = {
		...(!options?.file && { 'Content-Type': 'application/json' }),
		...(auth && token && { Authorization: `Bearer ${token.value}` }),
	};

	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
		method,
		//FIXME:
		//@ts-ignore
		body: options?.file ? body : JSON.stringify(body),
		headers,
		...options,
	});

	if (!res.ok) {
		return null as R;
	}

	const data = await res.json();

	return data as R;
}
