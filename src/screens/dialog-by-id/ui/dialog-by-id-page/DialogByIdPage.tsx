'use client';

import { IDialog } from '@/src/entities/dialog';
import { dialogSocket } from '@/src/shared/api/socket/socket';
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
		dialogSocket.emit('join_dialog', {
			dialogId: id,
			socketId: dialogSocket.id,
		});
		dialogSocket.emit('get_dialog', id);

		const onGetDialogEvent = (dialog: IDialog) => {
			setDialog(dialog);
		};

		dialogSocket.on('get_dialog', onGetDialogEvent);

		return () => {
			dialogSocket.off('get_dialogs');
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
