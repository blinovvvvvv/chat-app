import { User } from '@/src/entities/user';
import { query } from '@/src/shared/api/queryClient/query';
import LocationIcon from '@/src/shared/assets/location.svg';
import Avatar from '@/src/shared/ui/avatar/Avatar';
import Card from '@/src/shared/ui/card/Card';
import Image from 'next/image';
import { PropsWithChildren, useMemo } from 'react';

interface ProfileCardProps {
	isOwn: boolean;
	profileId?: string;
}

export default async function ProfileCard({
	isOwn,
	profileId,
	children,
}: PropsWithChildren<ProfileCardProps>) {
	const url = useMemo(
		() => (isOwn ? '/user/profile' : `/user/${profileId}`),
		[isOwn, profileId]
	);

	const profile = await query<User>({ url, auth: true });

	return (
		<Card
			variant='no-indent'
			className='flex items-end justify-between rounded border p-6 transition-colors'
		>
			<div className='flex items-end gap-x-5 '>
				<Avatar
					path={profile.avatarPath}
					className='rounded-full border border-gray-400 dark:border-none'
					width={100}
					height={100}
				/>
				<div>
					<h1 className='text-l font-medium'>
						{profile.name} {profile.lastname}
					</h1>
					{profile.city && (
						<div className='flex items-center gap-x-2 text-gray-600'>
							<Image src={LocationIcon} alt='City' />
							<span className='text-xs font-medium'>{profile.city}</span>
						</div>
					)}
				</div>
			</div>
			{children}
		</Card>
	);
}
