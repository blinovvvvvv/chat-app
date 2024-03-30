import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef, memo } from 'react';

type ButtonVariant = 'default' | 'clear';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	className?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{ className, variant = 'default', children, ...props },
	ref
) {
	return (
		<button
			ref={ref}
			className={clsx('font-medium', className, {
				['rounded bg-blue py-2']: variant === 'default',
			})}
			{...props}
		>
			{children}
		</button>
	);
});

export default memo(Button);
