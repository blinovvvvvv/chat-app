'use client';

import { CommentCountButton } from '@/src/entities/comment';
import { Post, PostCard, fetchNewPosts } from '@/src/entities/post';
import { memo, useCallback, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';

interface PostsListProps {
	initialPosts: Post[];
	page: number;
}

function PostsList({ initialPosts, page }: PostsListProps) {
	// first page of posts have prefetched
	const [currentPage, setCurrentPage] = useState<number>(page + 1);
	const [posts, setPosts] = useState<Post[]>(initialPosts);

	const setNewPosts = useCallback(async (page: number) => {
		await fetchNewPosts(page).then((posts) => {
			setPosts((existingPosts) => [...existingPosts, ...posts]);
			setCurrentPage((prevPage) => prevPage + 1);
		});
	}, []);

	return (
		<Virtuoso
			className='mt-5'
			useWindowScroll
			totalCount={posts.length}
			endReached={setNewPosts.bind(null, currentPage)}
			data={posts}
			itemContent={(index, post) => (
				<PostCard
					className='mb-5'
					id={post.id}
					commentsButton={<CommentCountButton count={post.comments.length} />}
				/>
			)}
		/>
	);
}

export default memo(PostsList);
