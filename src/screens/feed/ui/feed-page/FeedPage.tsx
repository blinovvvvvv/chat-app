import { fetchInitialPosts } from '@/src/entities/post';
import { CreatePostBanner } from '@/src/widgets/create-post';
import { Page } from '@/src/widgets/page';
import { PostsList } from '@/src/widgets/posts-list';
import { memo } from 'react';

async function FeedPage() {
	const { data: posts, currentPage } = await fetchInitialPosts();

	return (
		<Page>
			<CreatePostBanner />
			<PostsList initialPosts={posts} page={currentPage} />
		</Page>
	);
}

export default memo(FeedPage);
