'use client';

import { useCallback, useState } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { fetchNewPosts } from '../../api/fetch-posts/fetch-new-posts';
import { Post } from '../../model/types/post.types';

interface PostsListProps {
	initialPosts: Post[];
	page: number;
}

export default function PostsList({ initialPosts, page }: PostsListProps) {
	const [posts, setPosts] = useState<Post[]>(initialPosts);
	// first page of posts have prefetched
	const [currentPage, setCurrentPage] = useState<number>(page + 1);

	const setNewPosts = useCallback(async (page: number) => {
		await fetchNewPosts(page).then((posts) => {
			setPosts((existingPosts) => [...existingPosts, ...posts]);
			setCurrentPage((prevPage) => prevPage + 1);
		});
	}, []);

	return (
		<Virtuoso
			useWindowScroll
			className='h-full'
			totalCount={posts.length}
			endReached={setNewPosts.bind(null, currentPage)}
			data={posts}
			itemContent={(index, post) => <div className='py-24'>{post.text}</div>}
		/>
	);
}
