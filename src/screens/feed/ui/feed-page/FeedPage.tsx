import { CreatePostForm } from '@/src/features/create-post';
import { Page } from '@/src/widgets/page';
import { memo } from 'react';

function FeedPage() {
	return (
		<Page>
			<CreatePostForm />
		</Page>
	);
}

export default memo(FeedPage);
