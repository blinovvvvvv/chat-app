'use client';

import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

interface UseModalProps {
	onClose?: () => void;
	isOpen?: boolean;
}

/**
 * Hook for modal
 * @param isOpen
 * @param onClose
 */
export function useModal({ isOpen, onClose }: UseModalProps) {
	const modalRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

	const close = useCallback(() => {
		if (onClose) {
			modalRef.current = setTimeout(() => {
				onClose();
			}, 0);
		}
	}, [onClose]);

	// close modal on escape click
	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				close();
			}
		},
		[close]
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}

		return () => {
			clearTimeout(modalRef.current);
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	return {
		close,
	};
}
