import { PostsList, fetchInitialPosts } from '@/src/entities/post';
import { CreatePostBanner } from '@/src/widgets/create-post';
import { Page } from '@/src/widgets/page';
import { memo } from 'react';

async function FeedPage() {
	const posts = await fetchInitialPosts();

	return (
		<Page>
			<CreatePostBanner />
			<PostsList initialPosts={posts.data} page={posts.currentPage} />
		</Page>
	);
}

export default memo(FeedPage);
