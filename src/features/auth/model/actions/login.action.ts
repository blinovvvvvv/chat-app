'use server';

import { query } from '@/src/shared/api/queryClient/query';
import saveUser from '../../lib/helpers/saveUser';
import { AuthPayload, AuthResponse } from '../types/auth.types';

export async function login(payload: AuthPayload) {
	try {
		const { accessToken, refreshToken, user } = await query<
			AuthResponse,
			AuthPayload
		>({
			url: '/auth/login',
			method: 'POST',
			body: payload,
			options: { cache: 'no-cache' },
		});

		if (accessToken) {
			saveUser({ accessToken, refreshToken, user });
		}
	} catch (error) {
		console.error(error);
		throw new Error('Something went wrong');
	}
}
