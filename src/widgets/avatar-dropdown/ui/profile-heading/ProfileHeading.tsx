'use client';

import { useUserStore } from '@/src/entities/user';
import Avatar from '@/src/shared/ui/avatar/Avatar';
import { memo } from 'react';

function ProfileHeading() {
	const userName = useUserStore((state) => state.name);
	const userLastname = useUserStore((state) => state.lastname);
	const userEmail = useUserStore((state) => state.email);

	return (
		<div className='flex items-center gap-x-[10px]'>
			<Avatar width={30} height={30} />
			<div className='text-xs font-medium'>
				<div className='truncate'>
					{userName} {userLastname}
				</div>
				<div className='truncate text-gray-600'>{userEmail}</div>
			</div>
		</div>
	);
}

export default memo(ProfileHeading);
