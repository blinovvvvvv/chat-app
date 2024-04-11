'use client';

import { ImageUpload } from '@/src/features/image-upload';
import Button from '@/src/shared/ui/button/Button';
import Card from '@/src/shared/ui/card/Card';
import TextArea from '@/src/shared/ui/textarea/TextArea';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useCallback } from 'react';
import { useCreatePostStore } from '../../model/store/create-post.store';

// dynamic import to avoid "document is undefined" error
const DynamicModal = dynamic(() => import('@/src/shared/ui/modal/Modal'), {
	ssr: false,
});

interface CreatePostModalProps {
	isOpenModal: boolean;
	handleClick?: () => void;
}

export default function CreatePostModal({
	isOpenModal,
	handleClick,
}: CreatePostModalProps) {
	const textValue = useCreatePostStore((state) => state.textValue);
	const setTextValue = useCreatePostStore((state) => state.setTextValue);

	const image = useCreatePostStore((state) => state.image);
	const setImage = useCreatePostStore((state) => state.setImage);

	const onTextAreaChange = useCallback(
		(value: string) => {
			setTextValue(value);
		},
		[setTextValue]
	);

	const onImageChange = useCallback(
		(value: Blob | MediaSource) => {
			setImage(value);
		},
		[setImage]
	);

	return (
		<DynamicModal
			className='min-w-[650px]'
			isOpen={isOpenModal}
			onClose={handleClick}
		>
			<form>
				<Card variant='no-indent' className='flex flex-col gap-y-4 px-8 py-6'>
					{image && (
						<Image
							src={URL.createObjectURL(image)}
							alt='Not found'
							width={100}
							height={100}
						/>
					)}
					<TextArea
						value={textValue}
						onChange={onTextAreaChange}
						className='w-full border-none text-xs font-medium text-gray-500'
						placeholder="What's new with you?"
						name='text'
						rows={14}
						cols={10}
						wrap='soft'
					/>
					<ImageUpload
						className='self-start'
						onChange={onImageChange}
						multiple={false}
					/>
					<Button
						className='mt-4 self-end text-xs'
						type='submit'
						variant='outline'
						aria-label='Click to post'
					>
						Post
					</Button>
				</Card>
			</form>
		</DynamicModal>
	);
}
