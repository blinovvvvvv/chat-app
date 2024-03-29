import { Providers } from '@/src/app';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import '../styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Chat App',
	description: 'A simple chat app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
