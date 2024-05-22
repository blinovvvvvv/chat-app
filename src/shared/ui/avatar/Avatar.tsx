import Image from 'next/image';
import { memo } from 'react';

interface AvatarProps {
	width: number;
	height: number;
	className?: string;
	path?: string;
}

function Avatar({ height, width, className, path }: AvatarProps) {
	const avatarPath = path || '/avatars/default-avatar.png';

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
