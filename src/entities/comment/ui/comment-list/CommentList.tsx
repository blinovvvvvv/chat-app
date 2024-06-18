'use client';

import Button from '@/src/shared/ui/button/Button';
import Divider from '@/src/shared/ui/divider/Divider';
import clsx from 'clsx';
import { Fragment, useState } from 'react';
import { IComment } from '../../model/types/comment.types';
import Comment from '../comment/Comment';

interface CommentListProps {
	comments: IComment[];
	className?: string;
}

export default function CommentList({ comments, className }: CommentListProps) {
	const [visibleCommentsCount, setVisibleCommentsCount] = useState(5);

	return (
		<div className={clsx('my-4', className)}>
			{comments.slice(0, visibleCommentsCount).map((c, index, arr) => (
				<Fragment key={c.id}>
					<Comment comment={c} />
					{arr.length - 1 !== index && <Divider className='my-3 ml-[35px]' />}
				</Fragment>
			))}
			{comments.length > visibleCommentsCount && (
				<Button
					variant='clear'
					className='my-3 text-xs font-semibold text-blue'
					onClick={() => setVisibleCommentsCount(10)}
				>
					Show following comments
				</Button>
			)}
		</div>
	);
}
