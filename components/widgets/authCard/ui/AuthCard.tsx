'use client';

import Card from '@/components/shared/ui/card/Card';
import clsx from 'clsx';
import { memo } from 'react';
import { useAuthCardStore } from '../model/authCard.store';
import LoginCard from './LoginCard';
import SignUpCard from './SignUpCard';

function AuthCard() {
	const tab = useAuthCardStore((state) => state.tab);

	return (
		<Card className='relative w-[450px] overflow-hidden rounded bg-gradient-to-tr from-[#191919] to-[#292929] px-12 py-12 mobile:max-w-[360px] mobile:px-8'>
			<div
				className={clsx('flex gap-x-24 transition-all duration-500', {
					['-translate-x-[450px]']: tab === 'signup',
				})}
			>
				<LoginCard />
				{/* 👇 hidden because this element bigger than loginCard an explodes the flex layout */}
				<SignUpCard className={clsx({ ['hidden']: tab === 'login' })} />
			</div>
		</Card>
	);
}

export default memo(AuthCard);
