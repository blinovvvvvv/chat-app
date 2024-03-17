import { PropsWithChildren, memo } from 'react';

interface CardProps {
	className?: string;
}

function Card({ className, children }: PropsWithChildren<CardProps>) {
	return <div className={className}>{children}</div>;
}

export default memo(Card);
