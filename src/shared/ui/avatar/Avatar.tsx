import { useUserStore } from '@/src/entities/user';
import Image from 'next/image';
import { memo } from 'react';

interface AvatarProps {
	width: number;
	height: number;
}

function Avatar({ height, width }: AvatarProps) {
	const userAvatarPath = useUserStore((state) => state.avatarPath);
	const avatarPath = userAvatarPath || '/avatars/default-avatar.png';

	return (
		<Image
			src={`${process.env.NEXT_PUBLIC_UPLOADS_URL}${avatarPath}`}
			alt='Avatar'
			width={width}
			height={height}
		/>
	);
}

export default memo(Avatar);
