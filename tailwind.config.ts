import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'selector',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		fontSize: {
			xs: '0.875rem',
			sm: '1rem',
			l: '1.125rem',
			xl: '1.75rem',
		},
		borderRadius: {
			s: '5px',
			DEFAULT: '10px',
			m: '15px',
			full: '9999px',
		},
		extend: {
			colors: {
				orange: '#AF9E00',
				'dark-orange': '#393227',
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
			keyframes: {
				scaleIn: {
					'0%': {
						transform: 'scale(1.5)',
					},
					'100%': {
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				'scale-in': 'scaleIn 1s ease-in',
			},
		},
	},
	plugins: [],
};
export default config;
