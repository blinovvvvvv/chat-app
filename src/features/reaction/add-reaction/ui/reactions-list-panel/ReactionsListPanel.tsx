import Button from '@/src/shared/ui/button/Button';
import Card from '@/src/shared/ui/card/Card';
import clsx from 'clsx';
import Image from 'next/image';
import { useCallback } from 'react';
import { availableReactions } from '../../model/data/available-reactions';
import { SelectReaction } from '../../model/types/add-reaction.types';

interface ReactionsListPanel {
	visible: boolean;
	onReactionClick: (reactionName: SelectReaction) => void;
}

export default function ReactionsListPanel({
	visible,
	onReactionClick,
}: ReactionsListPanel) {
	const handleReactionClick = useCallback(
		(reactionName: SelectReaction) => {
			onReactionClick(reactionName);
		},
		[onReactionClick]
	);

	return (
		<div
			className={clsx(
				'absolute -top-[calc(100%+15px)] left-0 pb-[15px] transition-all',
				{
					['opacity-100']: visible,
					['invisible opacity-0']: !visible,
				}
			)}
			aria-disabled={!visible}
			data-testid='add-reaction-panel'
		>
			<Card
				variant='no-indent'
				aria-disabled={!visible}
				className={clsx('flex gap-x-2 p-2')}
			>
				{availableReactions.map((reaction) => (
					<Button
						variant='clear'
						key={reaction.name}
						className='h-[30px] w-[30px] rounded-full p-1'
						onClick={() => handleReactionClick(reaction.name)}
					>
						<Image
							width={30}
							height={30}
							src={reaction.icon}
							alt={reaction.name}
						/>
					</Button>
				))}
			</Card>
		</div>
	);
}
