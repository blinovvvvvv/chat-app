'use client';

import { IDialog } from '@/src/entities/dialog';
import { useUserStore } from '@/src/entities/user';
import { SendMessageForm } from '@/src/features/message/send-message';
import { socket } from '@/src/shared/api/socket/socket';
import Card from '@/src/shared/ui/card/Card';
import { memo, useEffect, useMemo } from 'react';
import DialogHeader from '../dialog-header/DialogHeader';

interface DialogProps {
	dialog: IDialog;
}

function Dialog({ dialog }: DialogProps) {
	const userId = useUserStore((state) => state.id);

	const companion = useMemo(() => {
		return dialog.members.find((m) => m.id !== userId);
	}, [dialog.members, userId]);

	useEffect(() => {
		socket.on('get_message', (args) => {
			console.log(args);
		});

		return () => {
			socket.off('get_message');
		};
	}, []);

	if (!companion) return null;

	return (
		// 40px margins 50px header height
		<Card className='flex h-[calc(100vh-40px-50px)] flex-col pb-0'>
			<DialogHeader companion={companion} />
			{/** messages list */}
			<div className='flex-grow' />
			<SendMessageForm dialogId={dialog.id} />
		</Card>
	);
}

export default memo(Dialog);
