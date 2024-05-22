'use client';

import Avatar from '@/src/shared/ui/avatar/Avatar';
import Card from '@/src/shared/ui/card/Card';
import clsx from 'clsx';
import Image from 'next/image';
import { ReactElement, memo, useEffect, useState } from 'react';
import { fetchPostById } from '../../api/fetch-post-by-id/fetch-post-by-id';
import { Post } from '../../model/types/post.types';

interface PostCardProps {
	id: string;
	className?: string;
	/** slot for button to add reaction */
	reaction?: ReactElement;
	/** slot for button to view comments count */
	commentsButton?: ReactElement;
	/** slot for comments list */
	commentsList?: ReactElement;
	/** slot for add comment form */
	addCommentForm?: ReactElement;
}

function PostCard({
	id,
	className,
	reaction,
	commentsList,
	commentsButton,
	addCommentForm,
}: PostCardProps) {
	const [post, setPost] = useState<Post>();

	const getPostData = async () => {
		await fetchPostById(id)
			.then((data) => setPost(data))
			.catch((err) => console.error(err));
	};

	useEffect(() => {
		getPostData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Card variant='no-indent' className={clsx('rounded p-5', className)}>
			<div className='flex items-center gap-x-2.5'>
				<Avatar width={35} height={35} path={post?.User.avatarPath} />
				<span className='font-medium'>
					{post?.User.name} {post?.User.lastname}
				</span>
				<span>date</span>
			</div>
			<p className='my-2.5 text-xs'>{post?.text}</p>
			{post?.imagePath && (
				<div className='relative h-[260px] w-full'>
					<Image
						src={`${process.env.NEXT_PUBLIC_SERVER_URL}${post.imagePath}`}
						alt='Post picture'
						unoptimized
						fill
						objectFit='contain'
					/>
				</div>
			)}
			<div className='flex items-center gap-x-2.5'>
				{reaction}
				{commentsButton}
			</div>
			{commentsList}
			{addCommentForm}
		</Card>
	);
}

export default memo(PostCard);
