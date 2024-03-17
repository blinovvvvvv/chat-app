'use client';

import { ReactNode, createContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextState {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextState>({
	theme: 'light',
	setTheme: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>('light');

	useEffect(() => {
		if (
			localStorage.getItem('theme') === 'dark' ||
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', JSON.stringify('dark'));
			setTheme('dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', JSON.stringify('light'));
			setTheme('light');
		}
	}, []);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}
