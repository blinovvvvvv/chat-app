import clsx from 'clsx';
import { memo } from 'react';

interface DividerProps {
	className?: string;
}

function Divider({ className }: DividerProps) {
	return <div className={clsx('h-[1px] bg-dark-gray-200', className)} />;
}

export default memo(Divider);
