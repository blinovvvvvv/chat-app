import { ReactNode } from 'react';
import AuthProvider from './auth-provider/AuthProvider';
import ThemeProvider from './theme-provider/ThemeProvider';

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider>
			<AuthProvider>{children}</AuthProvider>
		</ThemeProvider>
	);
}
