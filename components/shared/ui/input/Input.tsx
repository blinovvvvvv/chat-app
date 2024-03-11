import { clsx } from 'clsx';
import Image from 'next/image';
import { ChangeEvent, InputHTMLAttributes, memo } from 'react';

type InputVariant = 'normal' | 'small' | 'clear';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	icon?: string;
	variant?: InputVariant;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({
	className,
	icon,
	value,
	onChange,
	variant = 'normal',
	...props
}: InputProps) {
	return (
		<div
			className={clsx({
				['flex items-center gap-x-2.5 rounded border border-dark-gray-200 bg-dark-gray-600 px-5 font-medium transition-all has-[:focus]:border-gray-400']:
					variant !== 'clear',
				['py-3']: variant === 'normal',
				['py-2']: variant === 'small',
			})}
		>
			{icon && <Image src={icon} alt='Icon' />}
			<input
				value={value}
				onChange={onChange}
				className={clsx(
					'bg-transparent text-gray-500 outline-none placeholder:text-gray-600 focus:border-gray-400',
					className
				)}
				{...props}
			/>
		</div>
	);
}

export default memo(Input);
