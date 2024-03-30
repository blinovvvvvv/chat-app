import logo from '@/src/shared/assets/logo.svg';
import Image from 'next/image';
import { memo } from 'react';

function Header() {
	return (
		<header className='h-[50px] bg-dark-gray-300'>
			<div className='mx-auto grid h-full max-w-[965px] grid-cols-[1fr_600px_56px] items-center gap-x-[66px]'>
				<Image src={logo} alt='Logotype' />
				{/** slot for input */}
				<div className=''>Input</div>

				{/** slot for avatar dropdown feature */}
				<div>Avatar</div>
			</div>
		</header>
	);
}

export default memo(Header);
