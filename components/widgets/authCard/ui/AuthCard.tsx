'use client';

import Logo from '@/components/shared/assets/logo.svg';
import Card from '@/components/shared/ui/card/Card';
import Input from '@/components/shared/ui/input/Input';
import Image from 'next/image';
import { ChangeEvent, memo, useCallback, useState } from 'react';

function AuthCard() {
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
		<Card className='px-12'>
			<h1>Home</h1>
			<Image src={Logo} alt='logo' />
			<Input
				value={email}
				onChange={onChangeEmail}
				placeholder='Email address'
			/>
			<Input
				value={password}
				onChange={onChangePassword}
				placeholder='Password'
			/>
		</Card>
	);
}

export default memo(AuthCard);
