import Cookies from 'js-cookie';
import { io } from 'socket.io-client';
import { COOKIES_ACCESS_TOKEN_KEY } from '../../const/cookies';

export const dialogSocket = io('http://localhost:4000/dialog', {
	auth: {
		token: Cookies.get(COOKIES_ACCESS_TOKEN_KEY),
	},
});
