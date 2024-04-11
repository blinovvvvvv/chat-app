'use client';

import Avatar from '@/src/shared/ui/avatar/Avatar';
import Button from '@/src/shared/ui/button/Button';
import Card from '@/src/shared/ui/card/Card';
import { memo, useCallback, useState } from 'react';
import CreatePostModal from '../../../../widgets/post/create-post-modal/ui/create-post-modal/CreatePostModal';

function CreatePostForm() {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleClick = useCallback(() => {
		setIsOpenModal((prev) => !prev);
	}, []);

	return (
		<>
			<Button
				className='w-full'
				variant='clear'
				aria-label='Click to create your post!'
				onClick={handleClick}
			>
				<Card className='flex w-full items-center gap-x-3 transition-colors'>
					<Avatar width={25} height={25} />
					<span className='text-xs font-medium transition-colors dark:text-gray-600'>
						What&apos;s new with you?
					</span>
				</Card>
			</Button>
			<CreatePostModal handleClick={handleClick} isOpenModal={isOpenModal} />
		</>
	);
}

export default memo(CreatePostForm);
