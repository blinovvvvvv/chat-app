'use server';

import { fetchClient } from '@/src/shared/api/fetchClient/fetchClient';
import {
	COOKIES_ACCESS_TOKEN_KEY,
	COOKIES_REFRESH_TOKEN_KEY,
} from '@/src/shared/const/cookies';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { AuthPayload, AuthResponse } from '../types/auth.types';

export async function signup(payload: AuthPayload) {
	try {
		const data = await fetchClient<AuthResponse, AuthPayload>(
			'/auth/signup',
			'POST',
			payload,
			undefined,
			{ cache: 'no-cache' }
		);

		if (data.accessToken) {
			cookies().set(
				COOKIES_ACCESS_TOKEN_KEY,
				JSON.stringify(data.accessToken),
				{
					expires: 1000 * 60 * 60 * 24, // = 1 day
				}
			);
			cookies().set(
				COOKIES_REFRESH_TOKEN_KEY,
				JSON.stringify(data.refreshToken),
				{
					expires: 1000 * 60 * 60 * 24 * 7, // = 7 days
				}
			);
		}
	} catch (error) {
		console.error(error);
		throw new Error('Something went wrong');
	}

	redirect('/feed');
}
