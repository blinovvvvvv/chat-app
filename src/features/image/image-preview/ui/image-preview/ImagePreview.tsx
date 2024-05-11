import CrossIcon from '@/src/shared/assets/cross.svg';
import Button from '@/src/shared/ui/button/Button';
import clsx from 'clsx';
import Image from 'next/image';
import { MouseEvent, useCallback } from 'react';

interface ImagePreviewProps {
	image: Blob | MediaSource;
	onDelete: () => void;
	className?: string;
}

export default function ImagePreview({
	image,
	onDelete,
	className,
}: ImagePreviewProps) {
	const onClickHandler = useCallback(
		(e: MouseEvent<HTMLButtonElement>) => {
			/** prevent form submit */
			e.preventDefault();
			onDelete();
		},
		[onDelete]
	);

	return (
		<div className={clsx('relative cursor-pointer transition-all', className)}>
			<Button
				variant='clear'
				type='button'
				className={
					'absolute right-0 top-0 z-[10] rounded bg-gray-200 p-1.5 transition-all'
				}
				onClick={onClickHandler}
			>
				<Image src={CrossIcon} alt='Delete' />
			</Button>
			<Image
				src={URL.createObjectURL(image)}
				alt='Not found'
				width={100}
				height={100}
			/>
		</div>
	);
}
