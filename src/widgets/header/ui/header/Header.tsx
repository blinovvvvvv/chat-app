'use client';

import logo from '@/src/shared/assets/logo.svg';
import Input from '@/src/shared/ui/input/Input';
import { AvatarDropdown } from '@/src/widgets/avatar-dropdown';
import Image from 'next/image';
import { memo, useState } from 'react';

function Header() {
	const [findValue, setFindValue] = useState('');

	return (
		<header className='h-[50px] bg-gray-200 transition-colors dark:bg-dark-gray-300'>
			<div className='mx-auto grid h-full max-w-[965px] grid-cols-[1fr_600px_66px] items-center gap-x-[66px]'>
				{/** logo */}
				<Image src={logo} alt='Logotype' />

				{/** find input */}
				<Input
					variant='small'
					placeholder='Find...'
					value={findValue}
					onChange={setFindValue}
					className='max-w-[250px]'
				/>

				<AvatarDropdown />
			</div>
		</header>
	);
}

export default memo(Header);
