import clsx from 'clsx';
import { ButtonHTMLAttributes, PropsWithChildren, memo } from 'react';

type ButtonVariant = 'default' | 'clear';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	className?: string;
}

function Button({
	className,
	variant = 'default',
	children,
	...props
}: PropsWithChildren<ButtonProps>) {
	return (
		<button
			className={clsx('font-medium', className, {
				['rounded bg-blue py-2']: variant === 'default',
			})}
			{...props}
		>
			{children}
		</button>
	);
}

export default memo(Button);
