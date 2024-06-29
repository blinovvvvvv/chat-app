'use client';

import { IDialog } from '@/src/entities/dialog';
import { useUserStore } from '@/src/entities/user';
import { socket } from '@/src/shared/api/socket/socket';
import Button from '@/src/shared/ui/button/Button';
import { useRouter } from 'next/navigation';
import { memo, useCallback, useEffect, useState } from 'react';

interface CreateDialogButtonProps {
	friendId: string;
}

function CreateDialogButton({ friendId }: CreateDialogButtonProps) {
	const { push } = useRouter();
	const [dialogId, setDialogId] = useState('');
	const userId = useUserStore((state) => state.id);

	useEffect(() => {
		socket.emit('find_dialogs');

		const onFindDialogsEvent = (args: IDialog[]) => {
			// bad solution, need more code organization on backend
			const dialog = args.find((dialog) =>
				dialog.members.find(
					(member, _, arr) => member.id === friendId && arr.length === 2
				)
			);

			if (dialog) {
				setDialogId(dialog.id);
			}
		};

		socket.on('find_dialogs', onFindDialogsEvent);

		return () => {
			socket.off('find_dialogs', onFindDialogsEvent);
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleClick = useCallback(() => {
		if (!dialogId) {
			socket.emit('create', {
				creatorId: userId,
				userId: friendId,
			});
		}
		setTimeout(() => push(`/messages/${dialogId}`), 0);
	}, [dialogId, push, userId, friendId]);

	return (
		<Button onClick={handleClick} className='px-3 text-xs'>
			Write Message
		</Button>
	);
}

export default memo(CreateDialogButton);
