'use client';

import { User, useUserStore } from '@/src/entities/user';
import Avatar from '@/src/shared/ui/avatar/Avatar';
import clsx from 'clsx';
import Link from 'next/link';
import { memo, useMemo } from 'react';

interface DialogProps {
	members: User[];
	lastMessage?: string;
	className?: string;
}

function Dialog({ members, className, lastMessage }: DialogProps) {
	const userId = useUserStore((state) => state.id);

	const companion = useMemo(() => {
		return members.find((member) => member.id !== userId);
	}, [members, userId]);

	return (
		<Link
			href={`/messages/${companion?.id}`}
			className={clsx('flex items-start gap-x-4', className)}
		>
			<Avatar width={35} height={35} path={companion?.avatarPath} />
			<div className='flex flex-col gap-1'>
				<span className='text-xs font-medium'>
					{companion?.name} {companion?.lastname}
				</span>
				<p className='text-xs font-medium text-gray-500'>{lastMessage}</p>
			</div>
		</Link>
	);
}

export default memo(Dialog);
