'use client';

import { User, initializeUserStore } from '@/src/entities/user';
import { getNewToken } from '@/src/features/auth/model/actions/new-token.action';
import { COOKIES_REFRESH_TOKEN_KEY } from '@/src/shared/const/cookies';
import { isObjectEmpty } from '@/src/shared/utils/is-object-empty/isObjectEmpty';
import Cookies from 'js-cookie';
import { PropsWithChildren, useEffect } from 'react';

interface AuthProviderProps {
	user: User;
}

export default function AuthProvider({
	children,
	user,
}: PropsWithChildren<AuthProviderProps>) {
	useEffect(() => {
		const refreshToken = Cookies.get(COOKIES_REFRESH_TOKEN_KEY);

		if (user) initializeUserStore(user);

		if (isObjectEmpty(user) && refreshToken) {
			getNewToken({ refreshToken });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return <>{children}</>;
}
