import ReactionBlame from '@/src/shared/assets/reactions/blame.svg';
import ReactionLike from '@/src/shared/assets/reactions/like.svg';
import Image from 'next/image';
import { memo } from 'react';

interface ReactionIconProps {
	name: string;
}

function ReactionIcon({ name }: ReactionIconProps) {
	if (name === 'like')
		return <Image className='animate-scale-in' src={ReactionLike} alt='Like' />;
	else if (name === 'blame')
		return (
			<Image className='animate-scale-in' src={ReactionBlame} alt='Blame' />
		);

	return null;
}

export default memo(ReactionIcon);
