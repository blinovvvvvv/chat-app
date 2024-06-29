import Cookies from 'js-cookie';
import { io } from 'socket.io-client';
import { COOKIES_ACCESS_TOKEN_KEY } from '../../const/cookies';

export const socket = io(`${process.env.NEXT_PUBLIC_SERVER_URL}/dialog`, {
	auth: {
		token: Cookies.get(COOKIES_ACCESS_TOKEN_KEY),
	},
});
