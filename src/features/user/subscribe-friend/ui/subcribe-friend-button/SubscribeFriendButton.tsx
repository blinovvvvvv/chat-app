'use client';

import Button from '@/src/shared/ui/button/Button';
import clsx from 'clsx';
import { PropsWithChildren, memo, useCallback, useMemo } from 'react';
import subscribeFriend from '../../model/actions/subcribe-friend.action';

interface SubscribeFriendButtonProps {
	friendId: string;
	isSubscribed: boolean;
}

function SubscribeFriendButton({
	children,
	friendId,
	isSubscribed,
}: PropsWithChildren<SubscribeFriendButtonProps>) {
	const handleClick = useCallback(() => {
		subscribeFriend({ friendId });
	}, [friendId]);

	const ariaLabel = useMemo(
		() =>
			isSubscribed
				? 'Click to unsubscribe from this user'
				: 'Click to subscribe this user',
		[isSubscribed]
	);

	return (
		<Button
			className={clsx('px-4 text-xs', { ['bg-[#262626]']: isSubscribed })}
			onClick={handleClick}
			aria-label={ariaLabel}
		>
			{children}
		</Button>
	);
}

export default memo(SubscribeFriendButton);
