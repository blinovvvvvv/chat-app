import { COOKIES_ACCESS_TOKEN_KEY } from '@/src/shared/const/cookies';
import { AuthCard } from '@/src/widgets/auth-card';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
	// Redirect if user logged in
	if (cookies().get(COOKIES_ACCESS_TOKEN_KEY)?.value) {
		redirect('/feed');
	}

	return (
		<main className='flex min-h-screen items-center justify-center'>
			<AuthCard />
		</main>
	);
}
