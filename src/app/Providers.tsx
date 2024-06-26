import { User } from '@/src/entities/user';
import { query } from '@/src/shared/api/queryClient/query';
import { ReactNode } from 'react';
import AuthProvider from './auth-provider/AuthProvider';
import ThemeProvider from './theme-provider/ThemeProvider';

export default async function Providers({ children }: { children: ReactNode }) {
	const userProfile = await query<User>({
		url: '/user/profile',
		auth: true,
	});

	return (
		<ThemeProvider>
			<AuthProvider user={userProfile}>{children}</AuthProvider>
		</ThemeProvider>
	);
}
