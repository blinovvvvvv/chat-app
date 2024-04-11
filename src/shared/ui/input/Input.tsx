import { clsx } from 'clsx';
import Image from 'next/image';
import {
	ChangeEvent,
	InputHTMLAttributes,
	forwardRef,
	memo,
	useCallback,
} from 'react';

type InputVariant = 'normal' | 'small' | 'clear';

export interface InputProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
	className?: string;
	icon?: string;
	variant?: InputVariant;
	value?: string;
	onChange?: (value: any) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
	{
		className,
		icon,
		value,
		onChange,
		variant = 'normal',
		type,
		...props
	}: InputProps,
	ref
) {
	const onChangeHandler = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			if (type === 'file' && e.target.files) {
				onChange?.(e.target.files[0]);
			} else onChange?.(e.target.value);
		},
		[onChange, type]
	);

	return (
		<div
			className={clsx(className, {
				['flex items-center gap-x-2.5 rounded border border-gray-400 bg-transparent px-5 font-medium transition-colors has-[:focus]:border-dark-gray-100 dark:border-dark-gray-200 dark:bg-dark-gray-600 dark:has-[:focus]:border-gray-400']:
					variant !== 'clear',
				['py-3']: variant === 'normal',
				['py-1.5 text-xs']: variant === 'small',
			})}
		>
			{icon && <Image src={icon} alt='Icon' />}
			<input
				type={type}
				value={value}
				ref={ref}
				// 👇 to avoid error 'client component'
				onChange={onChange ? onChangeHandler : undefined}
				className='w-full bg-transparent text-black outline-none placeholder:text-gray-600 focus:border-dark-gray-300 dark:text-gray-500 dark:focus:border-gray-400'
				{...props}
			/>
		</div>
	);
});

Input.displayName = 'Input';

export default memo(Input);
