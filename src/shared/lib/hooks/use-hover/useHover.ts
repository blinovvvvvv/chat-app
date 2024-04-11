import { useCallback, useMemo, useState } from 'react';

interface UseHoverResult {
	isHover: boolean;
	onMouseEnter: () => void;
	onMouseLeave: () => void;
}

export function useHover(): UseHoverResult {
	const [isHover, setIsHover] = useState(false);

	const onMouseEnter = useCallback(() => {
		setIsHover(true);
	}, []);

	const onMouseLeave = useCallback(() => {
		setIsHover(false);
	}, []);

	return useMemo(
		() => ({
			isHover,
			onMouseEnter,
			onMouseLeave,
		}),
		[isHover, onMouseEnter, onMouseLeave]
	);
}
