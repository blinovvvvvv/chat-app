'use client';

import LockIcon from '@/components/shared/assets/lock.svg';
import Logo from '@/components/shared/assets/logo.svg';
import EmailIcon from '@/components/shared/assets/mail.svg';
import Button from '@/components/shared/ui/button/Button';
import Input from '@/components/shared/ui/input/Input';
import Text from '@/components/shared/ui/text/Text';
import clsx from 'clsx';
import Image from 'next/image';
import { ChangeEvent, memo, useCallback } from 'react';
import { useAuthCardStore } from '../model/authCard.store';

function LoginCard({ className }: { className?: string }) {
	const changeTab = useAuthCardStore((state) => state.changeTab);
	const signupClickHandler = useCallback(() => {
		changeTab('signup');
	}, [changeTab]);

	const email = useAuthCardStore((state) => state.email);
	const changeEmail = useAuthCardStore((state) => state.changeEmail);

	const password = useAuthCardStore((state) => state.password);
	const changePassword = useAuthCardStore((state) => state.changePassword);

	const onChangeEmail = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => changeEmail(e.target.value),
		[changeEmail]
	);
	const onChangePassword = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => changePassword(e.target.value),
		[changePassword]
	);

	return (
		<div
			className={clsx(
				'flex flex-shrink-0 basis-full flex-col gap-y-12 mobile:gap-y-8',
				className
			)}
		>
			<div className='flex flex-col items-center gap-y-10 self-center'>
				<Image src={Logo} alt='logo' />
				<div className='flex flex-col items-center'>
					<h1 className='text-xl font-medium'>Welcome Back</h1>
					<div className='flex gap-x-1'>
						<Text className='text-xs text-gray-600'>
							Don’t have an account yet?
						</Text>
						<Button
							onClick={signupClickHandler}
							variant='clear'
							className='text-xs'
						>
							Sign up
						</Button>
					</div>
				</div>
			</div>
			<form className='flex flex-col gap-y-2'>
				<Input
					type='email'
					icon={EmailIcon}
					value={email}
					onChange={onChangeEmail}
					placeholder='Email address'
					aria-label='Email address'
					autoComplete='email'
					required
				/>
				<Input
					type='password'
					icon={LockIcon}
					value={password}
					onChange={onChangePassword}
					placeholder='Password'
					aria-label='Password'
					autoComplete='new-password'
					required
				/>
				<Button className='mt-10'>Login</Button>
			</form>
		</div>
	);
}

export default memo(LoginCard);
