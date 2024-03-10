import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'selector',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		screens: {
			mobile: '480px',
			tablet: '640px',
			desktop: '1280px',
		},
		fontSize: {
			xs: '1rem',
			sm: '1.15rem',
			l: '1.3rem',
			xl: '2rem',
		},
		borderRadius: {
			s: '5px',
			DEFAULT: '10px',
		},
		transitionTimingFunction: {
			DEFAULT: 'ease',
		},
		transitionDuration: {
			DEFAULT: '0.2s',
		},
		extend: {
			colors: {
				blue: '#2F7ABF',
				'dark-blue': '#276298',
				red: '#D82828',
				'dark-red': '#42292A',
				gray: {
					100: '#CFCFCF',
					200: '#B5B5B5',
					300: '#A2A2A2',
					400: '#8C8C8C',
					500: '#797979',
					600: '#515151',
				},
				'dark-gray': {
					100: '#2C2C2C',
					200: '#303030',
					300: '#262626',
					400: '#1F1F1F',
					500: '#191919',
					600: '#121212',
					700: '#0F0F0F',
				},
			},
		},
	},
	plugins: [],
};
export default config;
