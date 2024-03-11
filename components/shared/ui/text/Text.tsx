import clsx from 'clsx';
import { ReactNode, memo } from 'react';

function Text({
	className,
	children,
}: {
	className?: string;
	children: ReactNode;
}) {
	return <p className={clsx('text-xs text-gray-600', className)}>{children}</p>;
}

export default memo(Text);
