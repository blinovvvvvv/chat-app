'use client';

import { IDialog } from '@/src/entities/dialog';
import { useUserStore } from '@/src/entities/user';
import Card from '@/src/shared/ui/card/Card';
import { memo, useMemo } from 'react';
import DialogHeader from '../dialog-header/DialogHeader';

interface DialogProps {
	dialog: IDialog;
}

function Dialog({ dialog }: DialogProps) {
	const userId = useUserStore((state) => state.id);

	const companion = useMemo(() => {
		return dialog.members.find((m) => m.id !== userId);
	}, [dialog.members, userId]);

	if (!companion) return null;

	return (
		// 40px margins 50px header height
		<Card className='h-[calc(100vh-40px-50px)]'>
			<DialogHeader companion={companion} />
			{/** messages list */}
			{/** send message form */}
		</Card>
	);
}

export default memo(Dialog);
