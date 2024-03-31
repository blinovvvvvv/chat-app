import { PropsWithChildren, memo } from 'react';

interface CardProps {
	className?: string;
	['data-testid']?: string;
}

function Card({
	className,
	children,
	'data-testid': dataTestId,
}: PropsWithChildren<CardProps>) {
	return (
		<div className={className} data-testid={dataTestId}>
			{children}
		</div>
	);
}

export default memo(Card);
