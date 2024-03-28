'use server';

import { initializeUserStore } from '@/src/entities/user';
import { query } from '@/src/shared/api/queryClient/query';
import {
	COOKIES_ACCESS_TOKEN_KEY,
	COOKIES_REFRESH_TOKEN_KEY,
	COOKIES_USER_KEY,
} from '@/src/shared/const/cookies';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AuthPayload, AuthResponse } from '../types/auth.types';

export async function signup(payload: AuthPayload) {
	try {
		const { accessToken, refreshToken, user } = await query<
			AuthResponse,
			AuthPayload
		>('/auth/signup', 'POST', payload, { cache: 'no-cache' });

		if (accessToken) {
			cookies().set(COOKIES_ACCESS_TOKEN_KEY, accessToken);
			cookies().set(COOKIES_REFRESH_TOKEN_KEY, refreshToken);

			cookies().set(COOKIES_USER_KEY, JSON.stringify(user));

			// 👇 add user to store to get access from everywhere
			initializeUserStore(user);
		}
	} catch (error) {
		console.error(error);
		throw new Error('Something went wrong');
	}

	redirect('/feed');
}
