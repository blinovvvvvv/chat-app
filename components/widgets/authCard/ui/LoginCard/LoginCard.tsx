'use client';

import LockIcon from '@/components/shared/assets/lock.svg';
import Logo from '@/components/shared/assets/logo.svg';
import EmailIcon from '@/components/shared/assets/mail.svg';
import Button from '@/components/shared/ui/button/Button';
import Input from '@/components/shared/ui/input/Input';
import Text from '@/components/shared/ui/text/Text';
import clsx from 'clsx';
import Image from 'next/image';
import { memo, useCallback } from 'react';
import { useAuthCardStore } from '../../model/authCard.store';

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
							tabIndex={1}
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
			>
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
					minLength={8}
					required
				/>
				<Button className='mt-10' type='submit'>
					Login
				</Button>
			</form>
		</div>
	);
}

export default memo(LoginCard);
