'use client';

import clsx from 'clsx';
import { ReactNode } from 'react';
import { useModal } from '../../lib/hooks/use-modal/useModal';
import Overlay from '../overlay/Overlay';
import { Portal } from '../portal/Portal';

interface ModalProps {
	className?: string;
	children: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

function Modal({ children, className, isOpen, onClose }: ModalProps) {
	const { close } = useModal({
		onClose,
		isOpen,
	});

	return (
		<Portal element={document.body}>
			<div
				className={clsx(
					'pointer-events-none fixed bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center opacity-0 transition-all duration-300',
					{
						['pointer-events-auto opacity-100']: isOpen,
						['opacity-0']: !isOpen,
					},
					className
				)}
			>
				<Overlay onClick={close} />
				<div
					className={clsx('z-[100] opacity-100 transition-all', {
						['-translate-y-14 opacity-0']: !isOpen,
					})}
				>
					{children}
				</div>
			</div>
		</Portal>
	);
}

export default Modal;
