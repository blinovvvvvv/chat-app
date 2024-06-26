'use client';

import { Dialog, DialogItem } from '@/src/entities/dialog';
import { dialogSocket } from '@/src/shared/api/socket/socket';
import Card from '@/src/shared/ui/card/Card';
import Divider from '@/src/shared/ui/divider/Divider';
import { useEffect, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';

export default function DialogList() {
	const [dialogs, setDialogs] = useState<Dialog[]>([]);

	useEffect(() => {
		dialogSocket.emit('find_dialogs');

		dialogSocket.on('find_dialogs', (args) => {
			console.log(args);
			setDialogs(args);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Card variant='no-indent' className='px-5'>
			<Virtuoso
				useWindowScroll
				totalCount={dialogs.length}
				data={dialogs}
				itemContent={(index, dialog) => (
					<>
						<DialogItem
							lastMessage={dialog?.messages?.at(-1) || ''}
							className='py-4'
							members={dialog.members}
						/>
						{index !== dialogs.length - 1 && <Divider />}
					</>
				)}
			/>
		</Card>
	);
}
