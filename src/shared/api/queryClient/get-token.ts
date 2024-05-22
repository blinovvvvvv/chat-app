import Cookies from 'js-cookie';
import { COOKIES_ACCESS_TOKEN_KEY } from '../../const/cookies';

export const getToken = async (client?: boolean) => {
	if (!client) {
		const { cookies } = await import('next/headers');
		const cookieManager = cookies();

		return cookieManager.get(COOKIES_ACCESS_TOKEN_KEY)?.value;
	}

	return Cookies.get(COOKIES_ACCESS_TOKEN_KEY);
};
