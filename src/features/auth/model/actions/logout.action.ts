'use server';

import { initializeUserStore } from '@/src/entities/user';
import {
	COOKIES_ACCESS_TOKEN_KEY,
	COOKIES_REFRESH_TOKEN_KEY,
	COOKIES_USER_KEY,
} from '@/src/shared/const/cookies';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logout() {
	cookies().delete(COOKIES_ACCESS_TOKEN_KEY);
	cookies().delete(COOKIES_REFRESH_TOKEN_KEY);
	cookies().delete(COOKIES_USER_KEY);

	// 👇 remove user from store
	initializeUserStore({
		email: '',
		name: '',
		lastname: '',
		avatarPath: '',
		city: '',
		id: '',
		isAdmin: false,
	});

	redirect('/');
}
