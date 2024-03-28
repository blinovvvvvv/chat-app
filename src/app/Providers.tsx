import { ReactNode } from 'react';
import ThemeProvider from './ThemeProvider/ThemeProvider';
import UserProvider from './UserProvider/UserProvider';

export default function Providers({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider>
			<UserProvider>{children}</UserProvider>
		</ThemeProvider>
	);
}
