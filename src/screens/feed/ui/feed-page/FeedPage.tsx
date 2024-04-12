import { CreatePostBanner } from '@/src/features/post/create-post';
import { Page } from '@/src/widgets/page';
import { memo } from 'react';

function FeedPage() {
	return (
		<Page>
			<CreatePostBanner />
		</Page>
	);
}

export default memo(FeedPage);
