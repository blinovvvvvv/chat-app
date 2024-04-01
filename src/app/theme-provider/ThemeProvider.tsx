'use client';

import { COOKIES_THEME_KEY } from '@/src/shared/const/cookies';
import {
	ReactNode,
	createContext,
	useCallback,
	useEffect,
	useState,
} from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextState {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextState>({
	theme: 'light',
	setTheme: () => {},
});

export default function ThemeProvider({ children }: { children: ReactNode }) {
	const [theme, setTheme] = useState<Theme>('light');

	function setDarkTheme() {
		document.documentElement.classList.add('dark');
		localStorage.setItem(COOKIES_THEME_KEY, JSON.stringify('dark'));
		setTheme('dark');
	}

	function setLightTheme() {
		document.documentElement.classList.remove('dark');
		localStorage.setItem(COOKIES_THEME_KEY, JSON.stringify('light'));
		setTheme('light');
	}

	const onThemeChange = useCallback((theme: Theme) => {
		if (theme === 'light') {
			setLightTheme();
		} else {
			setDarkTheme();
		}
	}, []);

	useEffect(() => {
		if (
			localStorage.getItem(COOKIES_THEME_KEY) === 'dark' ||
			window.matchMedia('(prefers-color-scheme: dark)').matches
		) {
			setDarkTheme();
		} else {
			setLightTheme();
		}
	}, []);

	return (
		<ThemeContext.Provider
			value={{
				theme,
				setTheme: onThemeChange,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
}
