import { Post } from '@/src/entities/post';
import { ReactionIcon } from '@/src/entities/reaction';
import { useUserStore } from '@/src/entities/user';
import LikeIcon from '@/src/shared/assets/like.svg';
import { useHover } from '@/src/shared/lib/hooks/use-hover/useHover';
import Button from '@/src/shared/ui/button/Button';
import clsx from 'clsx';
import Image from 'next/image';
import { useCallback, useMemo } from 'react';
import { setReactionToPost } from '../../api/set-reaction-to-post/set-reaction-to-post';
import { SelectReaction } from '../../model/types/add-reaction.types';
import ReactionsListPanel from '../reactions-list-panel/ReactionsListPanel';

interface AddReactionButtonProps {
	post: Post;
	revalidate: () => void;
}

export default function AddReactionButton({
	post,
	revalidate,
}: AddReactionButtonProps) {
	const { isHover, onMouseEnter, onMouseLeave } = useHover();

	const handleClick = useCallback(
		async (reactionName: SelectReaction) => {
			await setReactionToPost(post.id, reactionName).then(() => revalidate());
		},
		[post, revalidate]
	);

	const currentUserId = useUserStore((state) => state.id);
	const userReaction = useMemo(
		() => post.reactions.find((r) => r.User.id === currentUserId),
		[currentUserId, post.reactions]
	);

	const reactionsCount = useMemo(
		() => post.reactions.length,
		[post.reactions.length]
	);

	return (
		<div
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			className='relative'
			data-testid='add-reaction-wrapper'
		>
			<Button
				variant='clear'
				className={clsx(
					'flex items-center gap-x-2 truncate rounded-m bg-dark-gray-100 px-3 py-2 text-xs text-gray-500 transition-all',
					{
						['bg-dark-red text-red']: userReaction?.name === 'like',
						['bg-dark-orange text-orange']: userReaction?.name === 'blame',
					}
				)}
				onClick={() => handleClick('like')}
				data-testid='add-reaction-button'
			>
				{userReaction ? (
					<ReactionIcon name={userReaction.name} />
				) : (
					<Image src={LikeIcon} alt='Like' />
				)}
				{reactionsCount}
			</Button>

			<ReactionsListPanel onReactionClick={handleClick} visible={isHover} />
		</div>
	);
}
