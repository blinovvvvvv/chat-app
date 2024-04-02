'use client';

import { useUserStore } from '@/src/entities/user';
import Image from 'next/image';
import { memo } from 'react';

interface AvatarProps {
	width: number;
	height: number;
	className?: string;
}

function Avatar({ height, width, className }: AvatarProps) {
	const userAvatarPath = useUserStore((state) => state.avatarPath);
	const avatarPath = userAvatarPath || '/avatars/default-avatar.png';

	return (
		<Image
			src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}${avatarPath}`}
			alt='Avatar'
			width={width}
			height={height}
			className={className}
		/>
	);
}

export default memo(Avatar);
