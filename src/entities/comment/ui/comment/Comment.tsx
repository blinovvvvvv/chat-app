import Avatar from '@/src/shared/ui/avatar/Avatar';
import clsx from 'clsx';
import { memo } from 'react';
import { IComment } from '../../model/types/comment.types';

interface CommentProps {
	comment: IComment;
	className?: string;
}

function Comment({ comment, className }: CommentProps) {
	return (
		<div className={clsx('flex items-start gap-x-2.5', className)}>
			<Avatar width={25} height={25} path={comment.User.avatarPath} />
			<div className='flex flex-col gap-2'>
				<div className='text-xs font-medium'>
					{comment.User.name} {comment.User.lastname}
				</div>
				<p className='text-xs'>{comment.text}</p>
			</div>
		</div>
	);
}

export default memo(Comment);
