'use client';

import { UserAvatar, useUserStore } from '@/src/entities/user';
import { memo } from 'react';

function ProfileHeading({
	'data-testid': dataTestId,
}: {
	'data-testid'?: string;
}) {
	const userName = useUserStore((state) => state.name);
	const userLastname = useUserStore((state) => state.lastname);
	const userEmail = useUserStore((state) => state.email);

	return (
		<div
			data-testid={dataTestId}
			className='flex select-none items-center gap-x-[10px]'
		>
			<UserAvatar width={30} height={30} />
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
