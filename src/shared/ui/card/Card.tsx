import clsx from 'clsx';
import { PropsWithChildren, memo } from 'react';

type CardVariant = 'default' | 'clear' | 'no-indent';

interface CardProps {
	className?: string;
	variant?: CardVariant;
	['data-testid']?: string;
}

function Card({
	className,
	children,
	variant = 'default',
	'data-testid': dataTestId,
}: PropsWithChildren<CardProps>) {
	return (
		<div
			className={clsx(className, {
				['rounded border border-gray-400 bg-gray-100 dark:border-dark-gray-200 dark:bg-dark-gray-500']:
					variant !== 'clear',
				['px-4 py-3']: variant !== 'no-indent',
			})}
			data-testid={dataTestId}
		>
			{children}
		</div>
	);
}

export default memo(Card);
