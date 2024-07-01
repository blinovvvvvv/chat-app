'use client';

import LockIcon from '@/src/shared/assets/lock.svg';
import Logo from '@/src/shared/assets/logo.svg';
import EmailIcon from '@/src/shared/assets/mail.svg';
import Button from '@/src/shared/ui/button/Button';
import Input from '@/src/shared/ui/input/Input';
import Text from '@/src/shared/ui/text/Text';
import clsx from 'clsx';
import Image from 'next/image';
import { memo, useCallback } from 'react';
import { login } from '../../model/actions/login.action';
import { useAuthCardStore } from '../../model/store/authCard.store';

interface LoginCardProps {
	className?: string;
	email: string;
	password: string;
	onChangeEmail: (email: string) => void;
	onChangePassword: (password: string) => void;
}

function LoginCard({
	className,
	email,
	password,
	onChangeEmail,
	onChangePassword,
}: LoginCardProps) {
	const tab = useAuthCardStore((state) => state.tab);
	const changeTab = useAuthCardStore((state) => state.changeTab);

	const signupClickHandler = useCallback(() => {
		changeTab('signup');
	}, [changeTab]);

	const registerWithPayload = login.bind(null, { email, password });

	return (
		<div
			className={clsx(
				'mobile:gap-y-8 flex flex-shrink-0 basis-full flex-col gap-y-12',
				className
			)}
			data-testid='login-card'
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
							tabIndex={1}
							data-testid='login-card-change-tab'
						>
							Sign up
						</Button>
					</div>
				</div>
			</div>
			{/** 👇 to disable focus on visually not visible inputs */}
			<form
				className={clsx('flex flex-col gap-y-2', {
					['hidden']: tab === 'signup',
				})}
				action={registerWithPayload}
				data-testid='login-card-form'
			>
				<Input
					type='email'
					icon={EmailIcon}
					value={email}
					onChange={onChangeEmail}
					placeholder='Email address'
					aria-label='Email address'
					autoComplete='email'
					data-testid='login-card-email'
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
					data-testid='login-card-password'
					minLength={8}
					required
				/>
				<Button className='mt-10' type='submit' data-testid='login-card-button'>
					Login
				</Button>
			</form>
		</div>
	);
}

export default memo(LoginCard);
