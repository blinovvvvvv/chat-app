import clsx from 'clsx';
import { ChangeEvent, TextareaHTMLAttributes, memo, useCallback } from 'react';

interface TextAreaProps
	extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
	className?: string;
	onChange?: (value: string) => void;
}

function TextArea({ className, onChange, ...props }: TextAreaProps) {
	const onChangeHandler = useCallback(
		(e: ChangeEvent<HTMLTextAreaElement>) => {
			onChange?.(e.target.value);
		},
		[onChange]
	);

	return (
		<textarea
			onChange={onChangeHandler}
			{...props}
			className={clsx(
				'resize-none rounded border outline-none transition-colors placeholder:text-gray-600 focus-within:border-gray-500 dark:border-dark-gray-300 dark:bg-dark-gray-500',
				className
			)}
		/>
	);
}

export default memo(TextArea);
