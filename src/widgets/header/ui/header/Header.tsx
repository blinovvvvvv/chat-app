'use client';

import logo from '@/src/shared/assets/logo.svg';
import Input from '@/src/shared/ui/input/Input';
import Image from 'next/image';
import { memo, useState } from 'react';

function Header() {
	const [findValue, setFindValue] = useState('');

	return (
		<header className='h-[50px] bg-dark-gray-300'>
			<div className='mx-auto grid h-full max-w-[965px] grid-cols-[1fr_600px_56px] items-center gap-x-[66px]'>
				{/** logo */}
				<Image src={logo} alt='Logotype' />

				<Input
					variant='small'
					placeholder='Find...'
					value={findValue}
					onChange={setFindValue}
					className='max-w-[250px]'
				/>

				{/** slot for avatar dropdown feature */}
				<div>Avatar</div>
			</div>
		</header>
	);
}

export default memo(Header);
