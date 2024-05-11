'use client';

import { ImagePreview } from '@/src/features/image/image-preview';
import { ImageUpload } from '@/src/features/image/image-upload';
import Button from '@/src/shared/ui/button/Button';
import Card from '@/src/shared/ui/card/Card';
import TextArea from '@/src/shared/ui/textarea/TextArea';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { MutableRefObject, useCallback, useRef } from 'react';
import { createPost } from '../../model/actions/create-post.action';
import { useCreatePostStore } from '../../model/store/create-post.store';

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
	const imageInputRef = useRef() as MutableRefObject<HTMLInputElement>;

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

	const onImageDelete = useCallback(() => {
		imageInputRef.current.value = '';
		setImage(undefined);
	}, [setImage]);

	const createPostFormAction = useCallback(
		(formData: FormData) => {
			createPost(formData).then(() => {
				setTextValue('');
				onImageDelete();
				handleClick?.();
			});
		},
		[handleClick, onImageDelete, setTextValue]
	);

	return (
		<DynamicModal
			className='min-w-[650px]'
			isOpen={isOpenModal}
			onClose={handleClick}
		>
			<form action={createPostFormAction}>
				<Card variant='no-indent' className='flex flex-col gap-y-4 px-8 py-6'>
					<TextArea
						value={textValue}
						onChange={onTextAreaChange}
						className='w-full border-none bg-transparent text-xs font-medium text-gray-500'
						placeholder="What's new with you?"
						name='text'
						rows={14}
						cols={10}
						wrap='soft'
					/>
					<div className='flex flex-col gap-y-4'>
						{image && (
							<ImagePreview
								className='self-start'
								image={image}
								onDelete={onImageDelete}
							/>
						)}
						<label
							htmlFor='image-upload'
							className='text-xs font-medium text-gray-500'
						>
							Add a picture
						</label>
						<ImageUpload
							className='self-start'
							onChange={onImageChange}
							multiple={false}
							name='image'
							id='image-upload'
							/** passing ref to reset input value if need */
							ref={imageInputRef}
						/>
					</div>
					<Button
						disabled={!textValue}
						className={clsx('self-end text-xs', {
							['cursor-not-allowed border-gray-600 text-gray-600']: !textValue,
						})}
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
