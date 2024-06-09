'use client';

import { CommentCountButton } from '@/src/entities/comment';
import { Post } from '@/src/entities/post';
import { fetchPostById } from '@/src/entities/post/api/fetch-post-by-id/fetch-post-by-id';
import { AddReactionButton } from '@/src/features/reaction/add-reaction';
import Avatar from '@/src/shared/ui/avatar/Avatar';
import Card from '@/src/shared/ui/card/Card';
import clsx from 'clsx';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import { ReactElement, memo, useEffect, useState } from 'react';

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

dayjs.extend(relativeTime);

function PostCard({
	id,
	className,
	commentsList,
	commentsButton,
	addCommentForm,
}: PostCardProps) {
	const [post, setPost] = useState<Post>();

	const getPostData = async () => {
		await fetchPostById(id).then((data) => setPost(data));
	};

	useEffect(() => {
		getPostData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!post) return null;

	return (
		<Card variant='no-indent' className={clsx('rounded p-5', className)}>
			<div className='flex items-center gap-x-2.5'>
				<Avatar width={35} height={35} path={post?.User.avatarPath} />
				<span className='font-medium'>
					{post?.User.name} {post?.User.lastname}
				</span>
				<span className='text-xs text-gray-600'>
					{dayjs(post?.createdAt).fromNow()}
				</span>
			</div>
			<div className='my-2.5'>
				{post?.text ? (
					<p className='text-xs'>{post?.text}</p>
				) : (
					<p className='text-xs text-gray-600'>Empty text</p>
				)}
			</div>
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
				<AddReactionButton revalidate={getPostData} post={post} />
				<CommentCountButton count={post?.comments.length} />
			</div>
			{commentsList}
			{addCommentForm}
		</Card>
	);
}

export default memo(PostCard);
