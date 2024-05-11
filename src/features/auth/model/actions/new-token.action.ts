'use server';

import { query } from '@/src/shared/api/queryClient/query';
import saveUser from '../../lib/helpers/saveUser';
import { AuthResponse } from '../types/auth.types';

export async function getNewToken(payload: { refreshToken: string }) {
	try {
		const { accessToken, refreshToken, user } = await query<
			AuthResponse,
			{ refreshToken: string }
		>({
			url: '/auth/new-token',
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
