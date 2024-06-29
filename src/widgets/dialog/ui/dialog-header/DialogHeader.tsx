import { User } from '@/src/entities/user';
import Arrow from '@/src/shared/assets/arrow.svg';
import Avatar from '@/src/shared/ui/avatar/Avatar';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';

interface DialogHeaderProps {
	companion: User;
}

function DialogHeader({ companion }: DialogHeaderProps) {
	return (
		<div className='flex items-center justify-between'>
			<Link className='flex items-center gap-2' href='/messages'>
				<Image src={Arrow} alt='Arrow' className='rotate-90' />
				<span className='text-xs font-medium text-gray-600'>Back</span>
			</Link>
			<p className='text-xs font-medium'>
				{companion.name} {companion.lastname}
			</p>
			<Avatar height={30} width={30} path={companion.avatarPath} />
		</div>
	);
}

export default memo(DialogHeader);
