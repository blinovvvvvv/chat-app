'use client';

import { IDialog } from '@/src/entities/dialog';
import { socket } from '@/src/shared/api/socket/socket';
import { Dialog } from '@/src/widgets/dialog';
import { Page } from '@/src/widgets/page';
import { memo, useEffect, useState } from 'react';

interface DialogByIdPageProps {
	params: {
		id: string;
	};
}

function DialogByIdPage({ params: { id } }: DialogByIdPageProps) {
	const [dialog, setDialog] = useState<IDialog>();

	useEffect(() => {
		socket.emit('join_dialog', {
			dialogId: id,
			socketId: socket.id,
		});
		socket.emit('get_dialog', id);

		const onGetDialogEvent = (dialog: IDialog) => {
			setDialog(dialog);
		};

		socket.on('get_dialog', onGetDialogEvent);

		return () => {
			socket.off('get_dialogs');
		};
	}, [id]);

	if (!dialog) return null;

	return (
		<Page>
			<Dialog dialog={dialog} />
		</Page>
	);
}

export default memo(DialogByIdPage);
