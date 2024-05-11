import { initializeUserStore } from '@/src/entities/user';
import {
	COOKIES_ACCESS_TOKEN_KEY,
	COOKIES_REFRESH_TOKEN_KEY,
	COOKIES_USER_KEY,
} from '@/src/shared/const/cookies';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AuthResponse } from '../../model/types/auth.types';

/** call only inside server-actions */
export default function saveUser({
	accessToken,
	refreshToken,
	user,
}: AuthResponse) {
	cookies().set(COOKIES_ACCESS_TOKEN_KEY, accessToken);
	cookies().set(COOKIES_REFRESH_TOKEN_KEY, refreshToken);
	cookies().set(COOKIES_USER_KEY, JSON.stringify(user));

	/** 👇 add user to store to get access from everywhere  */
	initializeUserStore(user);
	redirect('/feed');
}
