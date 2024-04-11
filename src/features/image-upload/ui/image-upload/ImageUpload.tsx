import Input, { InputProps } from '@/src/shared/ui/input/Input';
import { useCallback } from 'react';

interface ImageUploadProps extends InputProps {
	onChange: (value: Blob | MediaSource) => void;
}

export default function ImageUpload({
	onChange,
	variant = 'small',
	...props
}: ImageUploadProps) {
	const onChangeHandler = useCallback(
		(value: Blob | MediaSource) => {
			onChange(value);
		},
		[onChange]
	);

	return (
		<Input
			variant={variant}
			accept='image/*'
			type='file'
			onChange={onChangeHandler}
			{...props}
		/>
	);
}
