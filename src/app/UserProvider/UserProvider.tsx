'use client';

import { initializeUserStore } from '@/src/entities/user';
import Cookies from 'js-cookie';
import { ReactNode } from 'react';

export default function UserProvider({ children }: { children: ReactNode }) {
	const user = Cookies.get('user');

	if (user) {
		initializeUserStore(JSON.parse(user));
	}

	return <>{children}</>;
}
