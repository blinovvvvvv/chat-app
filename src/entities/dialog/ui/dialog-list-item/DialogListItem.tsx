'use client';

import { IDialog } from '@/src/entities/dialog';
import { useUserStore } from '@/src/entities/user';
import Avatar from '@/src/shared/ui/avatar/Avatar';
import clsx from 'clsx';
import Link from 'next/link';
import { memo, useMemo } from 'react';

interface DialogListItemProps {
	dialog: IDialog;
	className?: string;
}

function DialogListItem({
	dialog: { messages, members, id },
	className,
}: DialogListItemProps) {
	const userId = useUserStore((state) => state.id);

	const companion = useMemo(() => {
		return members.find((member) => member.id !== userId);
	}, [members, userId]);

	const lastMessage = useMemo(() => {
		if (messages && messages.length > 0) return messages[-1];
	}, [messages]);

	return (
		<Link
			href={`/messages/${id}`}
			className={clsx('flex items-start gap-x-4', className)}
		>
			<Avatar width={35} height={35} path={companion?.avatarPath} />
			<div className='flex flex-col gap-1'>
				<span className='text-xs font-medium'>
					{companion?.name} {companion?.lastname}
				</span>
				<p className='text-xs font-medium text-gray-500'>{lastMessage?.text}</p>
			</div>
		</Link>
	);
}

export default memo(DialogListItem);
