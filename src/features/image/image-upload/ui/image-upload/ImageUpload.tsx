import Input, { InputProps } from '@/src/shared/ui/input/Input';
import { forwardRef, useCallback } from 'react';

interface ImageUploadProps extends InputProps {
	onChange: (value: Blob | MediaSource) => void;
}

const ImageUpload = forwardRef<HTMLInputElement, ImageUploadProps>(
	function ImageUpload(
		{ onChange, variant = 'small', ...props }: ImageUploadProps,
		ref
	) {
		const onChangeHandler = useCallback(
			(value: Blob | MediaSource) => {
				onChange(value);
			},
			[onChange]
		);

		return (
			<Input
				ref={ref}
				variant={variant}
				accept='image/*'
				type='file'
				onChange={onChangeHandler}
				{...props}
			/>
		);
	}
);

ImageUpload.displayName = 'ImageUpload';

export default ImageUpload;
