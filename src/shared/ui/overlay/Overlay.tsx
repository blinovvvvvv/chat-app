import clsx from 'clsx';
import { memo } from 'react';

interface OverlayProps {
	className?: string;
	onClick?: () => void;
}

function Overlay({ className, onClick }: OverlayProps) {
	return (
		<div
			onClick={onClick}
			className={clsx(
				'fixed bottom-0 left-0 right-0 top-0 z-10 flex cursor-pointer items-center bg-dark-gray-700 opacity-70',
				className
			)}
		/>
	);
}

export default memo(Overlay);
