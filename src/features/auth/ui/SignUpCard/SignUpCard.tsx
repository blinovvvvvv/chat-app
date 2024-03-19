'use client';

import LockIcon from '@/src/shared/assets/lock.svg';
import Logo from '@/src/shared/assets/logo.svg';
import MailIcon from '@/src/shared/assets/mail.svg';
import Button from '@/src/shared/ui/button/Button';
import Input from '@/src/shared/ui/input/Input';
import clsx from 'clsx';
import Image from 'next/image';
import { memo, useCallback } from 'react';
import { signup } from '../../model/services/signup.action';
import { useAuthCardStore } from '../../model/store/authCard.store';

interface SignUpCardProps {
	className?: string;
	email: string;
	password: string;
	onChangeEmail: (email: string) => void;
	onChangePassword: (password: string) => void;
}

function SignUpCard({
	className,
	email,
	password,
	onChangeEmail,
	onChangePassword,
}: SignUpCardProps) {
	const changeTab = useAuthCardStore((state) => state.changeTab);
	const onBackClick = useCallback(() => {
		changeTab('login');
	}, [changeTab]);

	const name = useAuthCardStore((state) => state.name);
	const changeName = useAuthCardStore((state) => state.changeName);

	const surname = useAuthCardStore((state) => state.surname);
	const changeSurname = useAuthCardStore((state) => state.changeSurname);

	const signupWithPayload = signup.bind(null, {
		email,
		password,
		name,
		surname,
	});

	return (
		<div
			className={clsx(
				'flex flex-shrink-0 basis-full flex-col gap-y-12',
				className
			)}
		>
			<div>
				<div className='flex flex-col items-center gap-y-10 self-center'>
					<Image src={Logo} alt='logo' />
					<div className='flex w-[225px] items-center justify-between self-start mobile:w-[200px]'>
						<Button variant='clear' onClick={onBackClick}>
							⬅️Back
						</Button>
						<h1 className='text-xl font-medium'>Sign Up</h1>
					</div>
				</div>
			</div>
			<form action={signupWithPayload} className='flex flex-col gap-y-2'>
				<Input
					value={name}
					onChange={changeName}
					placeholder='Your name'
					aria-label='Your name'
					required
				/>
				<Input
					value={surname}
					onChange={changeSurname}
					placeholder='Your surname'
					aria-label='Your surname'
					required
				/>
				<Input
					type='email'
					icon={MailIcon}
					value={email}
					onChange={onChangeEmail}
					placeholder='Enter your email'
					aria-label='Enter your email'
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
					Sign Up
				</Button>
			</form>
		</div>
	);
}

export default memo(SignUpCard);
