'use client';

import { CommentCountButton } from '@/src/entities/comment';
import CommentList from '@/src/entities/comment/ui/comment-list/CommentList';
import { Post } from '@/src/entities/post';
import { fetchPostById } from '@/src/entities/post/api/fetch-post-by-id/fetch-post-by-id';
import { AddCommentForm } from '@/src/features/comment/add-comment';
import { AddReactionButton } from '@/src/features/reaction/add-reaction';
import Avatar from '@/src/shared/ui/avatar/Avatar';
import Card from '@/src/shared/ui/card/Card';
import Divider from '@/src/shared/ui/divider/Divider';
import clsx from 'clsx';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import { memo, useCallback, useEffect, useState } from 'react';

interface PostCardProps {
	id: string;
	className?: string;
}

dayjs.extend(relativeTime);

function PostCard({ id, className }: PostCardProps) {
	const [post, setPost] = useState<Post>();

	const getPostData = useCallback(async () => {
		await fetchPostById(id).then((data) => setPost(data));
	}, [id]);

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
				<div className='relative mb-2.5 h-[260px] w-full'>
					<Image
						src={`${process.env.NEXT_PUBLIC_SERVER_URL}${post.imagePath}`}
						alt='Post picture'
						unoptimized
						fill
						objectFit='contain'
					/>
				</div>
			)}
			<div className='mb-3 flex items-center gap-x-2.5'>
				<AddReactionButton revalidate={getPostData} post={post} />
				<CommentCountButton count={post?.comments.length} />
			</div>
			{post.comments.length > 0 && (
				<>
					<Divider className='-mx-5' />
					<CommentList comments={post.comments} />
				</>
			)}
			<AddCommentForm postId={post.id} revalidate={getPostData} />
		</Card>
	);
}

export default memo(PostCard);
