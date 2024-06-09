import ReactionBlame from '@/src/shared/assets/reactions/blame.svg';
import ReactionLike from '@/src/shared/assets/reactions/like.svg';
import Image from 'next/image';

interface ReactionIconProps {
	name: string;
}

export default function ReactionIcon({ name }: ReactionIconProps) {
	if (name === 'like')
		return <Image className='animate-scale-in' src={ReactionLike} alt='Like' />;
	else if (name === 'blame')
		return (
			<Image className='animate-scale-in' src={ReactionBlame} alt='Blame' />
		);

	return null;
}
