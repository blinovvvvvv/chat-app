'use client';

import Avatar from '@/src/shared/ui/avatar/Avatar';
import Button from '@/src/shared/ui/button/Button';
import Card from '@/src/shared/ui/card/Card';
import dynamic from 'next/dynamic';
import { memo, useCallback, useState } from 'react';

const DynamicModal = dynamic(() => import('@/src/shared/ui/modal/Modal'), {
	ssr: false,
});

function CreatePostForm() {
	const [isOpenModal, setIsOpenModal] = useState(false);

	const handleClick = useCallback(() => {
		setIsOpenModal((prev) => !prev);
	}, []);

	return (
		<Button
			className='w-full'
			variant='clear'
			aria-label='Click to create your post!'
			onClick={handleClick}
		>
			<Card className='flex w-full items-center gap-x-3'>
				<Avatar width={25} height={25} />
				<span className='text-xs font-medium dark:text-gray-600'>
					What&apos;s new with you?
				</span>
				<DynamicModal isOpen={isOpenModal} onClose={handleClick}>
					<textarea
						className='text-xs font-medium text-gray-600'
						placeholder="What's new with you?"
						name='text'
						rows={14}
						cols={10}
						wrap='soft'
					/>
				</DynamicModal>
			</Card>
		</Button>
	);
}

export default memo(CreatePostForm);
