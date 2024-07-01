import LockIcon from '@/src/shared/assets/lock.svg';
import Logo from '@/src/shared/assets/logo.svg';
import MailIcon from '@/src/shared/assets/mail.svg';
import Button from '@/src/shared/ui/button/Button';
import Input from '@/src/shared/ui/input/Input';
import clsx from 'clsx';
import Image from 'next/image';
import { useCallback } from 'react';
import { signup } from '../../model/actions/signup.action';
import { useAuthCardStore } from '../../model/store/authCard.store';

interface SignUpCardProps {
	className?: string;
	email: string;
	password: string;
	onChangeEmail: (email: string) => void;
	onChangePassword: (password: string) => void;
}

export default function SignUpCard({
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

	const lastname = useAuthCardStore((state) => state.lastname);
	const changeLastname = useAuthCardStore((state) => state.changeLastname);

	const signupWithPayload = signup.bind(null, {
		email,
		password,
		name,
		lastname,
	});

	return (
		<div
			className={clsx(
				'flex flex-shrink-0 basis-full flex-col gap-y-12',
				className
			)}
			data-testid='signup-card'
		>
			<div>
				<div className='flex flex-col items-center gap-y-10 self-center'>
					<Image src={Logo} alt='logo' />
					<div className='mobile:w-[200px] flex w-[225px] items-center justify-between self-start'>
						<Button
							data-testid='signup-card-change-tab'
							variant='clear'
							onClick={onBackClick}
						>
							⬅️Back
						</Button>
						<h1 className='text-xl font-medium'>Sign Up</h1>
					</div>
				</div>
			</div>
			<form
				data-testid='signup-card-form'
				action={signupWithPayload}
				className='flex flex-col gap-y-2'
			>
				<Input
					value={name}
					onChange={changeName}
					placeholder='Your name'
					aria-label='Your name'
					data-testid='signup-card-name'
					required
				/>
				<Input
					value={lastname}
					onChange={changeLastname}
					placeholder='Your lastname'
					aria-label='Your lastname'
					data-testid='signup-card-lastname'
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
					data-testid='signup-card-email'
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
					data-testid='signup-card-password'
					minLength={8}
					required
				/>
				<Button
					className='mt-10'
					type='submit'
					data-testid='signup-card-button'
				>
					Sign Up
				</Button>
			</form>
		</div>
	);
}
