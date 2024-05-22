'use client';

import { UserAvatar } from '@/src/entities/user';
import Button from '@/src/shared/ui/button/Button';
import Card from '@/src/shared/ui/card/Card';
import dynamic from 'next/dynamic';
import { useCallback, useState } from 'react';

const CreatePostModal = dynamic(
	() => import('../create-post-modal/CreatePostModal')
);

export default function CreatePostBanner() {
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
					<UserAvatar width={25} height={25} />
					<span className='text-xs font-medium transition-colors dark:text-gray-600'>
						What&apos;s new with you?
					</span>
				</Card>
			</Button>
			<CreatePostModal handleClick={handleClick} isOpenModal={isOpenModal} />
		</>
	);
}
