'use client';

import LockIcon from '@/components/shared/assets/lock.svg';
import Logo from '@/components/shared/assets/logo.svg';
import EmailIcon from '@/components/shared/assets/mail.svg';
import Button from '@/components/shared/ui/button/Button';
import Input from '@/components/shared/ui/input/Input';
import Text from '@/components/shared/ui/text/Text';
import clsx from 'clsx';
import Image from 'next/image';
import { ChangeEvent, memo, useCallback, useState } from 'react';

function SignUpCard({ className }: { className?: string }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onChangeEmail = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
		[]
	);
	const onChangePassword = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
		[]
	);

	return (
		<div
			className={clsx(
				'flex flex-shrink-0 basis-full flex-col gap-y-12',
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
						<Button variant='clear' className='text-xs'>
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

export default memo(SignUpCard);
