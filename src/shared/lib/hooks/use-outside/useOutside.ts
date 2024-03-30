import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

type UseOutsideHookReturn = {
	ref: any;
	visible: boolean;
	setIsVisible: Dispatch<SetStateAction<boolean>>;
};

export const useOutside = (initialIsVisible: boolean): UseOutsideHookReturn => {
	const [visible, setIsVisible] = useState(initialIsVisible);
	const ref = useRef<HTMLElement>(null);

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsVisible(false);
		}
	};

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	});
	return { ref, visible, setIsVisible };
};
