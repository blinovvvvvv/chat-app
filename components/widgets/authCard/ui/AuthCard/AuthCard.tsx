'use client';

import Card from '@/components/shared/ui/card/Card';
import clsx from 'clsx';
import { memo } from 'react';
import { useAuthCardStore } from '../../model/authCard.store';
import LoginCard from '../LoginCard/LoginCard';
import SignUpCard from '../SignUpCard/SignUpCard';

function AuthCard() {
	const tab = useAuthCardStore((state) => state.tab);

	const email = useAuthCardStore((state) => state.email);
	const changeEmail = useAuthCardStore((state) => state.changeEmail);

	const password = useAuthCardStore((state) => state.password);
	const changePassword = useAuthCardStore((state) => state.changePassword);

	return (
		<Card className='relative w-[450px] overflow-hidden rounded bg-gradient-to-tr from-[#191919] to-[#292929] px-12 py-12 mobile:max-w-[360px] mobile:px-8'>
			<div
				className={clsx('flex gap-x-24 transition-all duration-500', {
					['-translate-x-[450px] mobile:-translate-x-[390px]']:
						tab === 'signup',
				})}
			>
				<LoginCard
					email={email}
					password={password}
					onChangeEmail={changeEmail}
					onChangePassword={changePassword}
				/>
				{/* 👇 hidden because this element bigger than loginCard an explodes the flex layout */}
				<SignUpCard
					email={email}
					password={password}
					onChangeEmail={changeEmail}
					onChangePassword={changePassword}
					className={clsx({ ['hidden']: tab === 'login' })}
				/>
			</div>
		</Card>
	);
}

export default memo(AuthCard);
