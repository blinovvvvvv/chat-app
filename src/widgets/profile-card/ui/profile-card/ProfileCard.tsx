import { User } from '@/src/entities/user';
import { EditLink } from '@/src/features/edit-profile';
import { query } from '@/src/shared/api/queryClient/query';
import LocationIcon from '@/src/shared/assets/location.svg';
import Avatar from '@/src/shared/ui/avatar/Avatar';
import Card from '@/src/shared/ui/card/Card';
import Image from 'next/image';
import { memo } from 'react';

async function ProfileCard() {
	const profile = await query<User>('/user/profile');

	return (
		<Card className='flex items-end justify-between rounded border p-6 transition-colors dark:border-dark-gray-200 dark:bg-dark-gray-500'>
			<div className='flex items-end gap-x-5 '>
				<Avatar
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
			<EditLink />
		</Card>
	);
}

export default memo(ProfileCard);
