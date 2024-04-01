'use client';

import { initializeUserStore } from '@/src/entities/user';
import { getNewToken } from '@/src/features/auth/model/actions/new-token.action';
import {
	COOKIES_REFRESH_TOKEN_KEY,
	COOKIES_USER_KEY,
} from '@/src/shared/const/cookies';
import Cookies from 'js-cookie';
import { ReactNode, useEffect } from 'react';

export default function AuthProvider({ children }: { children: ReactNode }) {
	const user = Cookies.get(COOKIES_USER_KEY);

	useEffect(() => {
		const refreshToken = Cookies.get(COOKIES_REFRESH_TOKEN_KEY);

		if (user) {
			initializeUserStore(JSON.parse(user));
		}

		if (!user && refreshToken) {
			getNewToken({ refreshToken });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <>{children}</>;
}
