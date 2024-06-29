'use client';

import { DialogList } from '@/src/entities/dialog';
import { Page } from '@/src/widgets/page';
import { memo } from 'react';

function MessagesPage() {
	return (
		<Page>
			<DialogList />
		</Page>
	);
}

export default memo(MessagesPage);
