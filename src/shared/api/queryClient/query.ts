import { getToken } from './get-token';
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
	/** @prop Set true to fetch data from client-side */
	client?: boolean;
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
	client,
}: QueryProps<P>): Promise<R> {
	// get token from cookies
	const token = auth ? await getToken(client) : '';

	const headers = {
		...(!options?.file && { 'Content-Type': 'application/json' }),
		...(auth && token && { Authorization: `Bearer ${token}` }),
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
		return undefined as R;
	}

	const data = await res.json();

	return data;
}
