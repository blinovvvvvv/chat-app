import { clsx } from 'clsx';
import Image from 'next/image';
import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string;
	icon?: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ className, icon, value, onChange, ...props }: InputProps) {
	return (
		<div className='px-5 py-3'>
			{icon && <Image src={icon} alt='Icon' />}
			<input
				value={value}
				onChange={onChange}
				className={clsx('bg-transparent outline-none', className)}
				{...props}
			/>
		</div>
	);
}

export default memo(Input);
