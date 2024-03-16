'use client';

import Card from '@/components/shared/ui/card/Card';
import clsx from 'clsx';
import { memo, useState } from 'react';
import LoginCard from './LoginCard';
import SignUpCard from './SignUpCard';

function AuthCard() {
	const [tab, setTab] = useState<'login' | 'signup'>('login');
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');

	// const onChangeEmail = useCallback(
	// 	(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
	// 	[]
	// );
	// const onChangePassword = useCallback(
	// 	(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
	// 	[]
	// );

	return (
		<Card className='relative w-[450px] overflow-hidden rounded bg-gradient-to-tr from-[#191919] to-[#292929] px-12 py-12 mobile:max-w-[360px] mobile:px-8'>
			<div
				className={clsx('flex gap-x-24 transition-all duration-500', {
					['-translate-x-[450px]']: tab === 'signup',
				})}
			>
				<LoginCard />
				<SignUpCard className={clsx({ ['hidden']: tab === 'login' })} />
			</div>
		</Card>
	);
}

export default memo(AuthCard);
