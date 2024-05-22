'use client';

import Avatar from '@/src/shared/ui/avatar/Avatar';
import { memo } from 'react';
import { useUserStore } from '../../model/store/user.store';

interface UserAvatarProps {
	width: number;
	height: number;
	className?: string;
}

function UserAvatar({ height, width, className }: UserAvatarProps) {
	const userAvatarPath = useUserStore((state) => state.avatarPath);

	return (
		<Avatar
			className={className}
			width={width}
			height={height}
			path={userAvatarPath}
		/>
	);
}

export default memo(UserAvatar);
