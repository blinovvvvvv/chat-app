'use client';

import { DialogList } from '@/src/widgets/dialog-list';
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
