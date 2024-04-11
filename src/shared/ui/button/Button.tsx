import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef, memo } from 'react';

type ButtonVariant = 'default' | 'clear' | 'outline';

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
				['rounded border px-4 py-1 transition-colors dark:border-gray-400 dark:hover:border-gray-600 dark:hover:text-gray-600']:
					variant === 'outline',
			})}
			{...props}
		>
			{children}
		</button>
	);
});

export default memo(Button);
