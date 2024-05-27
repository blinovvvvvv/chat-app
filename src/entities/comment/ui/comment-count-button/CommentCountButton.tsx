import CommentIcon from '@/src/shared/assets/comment.svg';
import Button from '@/src/shared/ui/button/Button';
import Image from 'next/image';
import { memo } from 'react';

interface CommentCountButtonProps {
	count: number;
}

function CommentCountButton({ count }: CommentCountButtonProps) {
	return (
		<Button
			className='rounded-m flex items-center gap-x-2 truncate bg-dark-gray-100 px-3 py-2 text-xs text-gray-500'
			variant='clear'
		>
			<Image src={CommentIcon} alt='Comment' />
			{count}
		</Button>
	);
}

export default memo(CommentCountButton);
