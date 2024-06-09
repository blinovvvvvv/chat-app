import BlameIcon from '@/src/shared/assets/reactions/blame.svg';
import LikeIcon from '@/src/shared/assets/reactions/like.svg';
import { ReactionData } from '../types/add-reaction.types';

export const availableReactions: ReactionData[] = [
	{
		name: 'like',
		icon: LikeIcon,
	},
	{
		name: 'blame',
		icon: BlameIcon,
	},
];
