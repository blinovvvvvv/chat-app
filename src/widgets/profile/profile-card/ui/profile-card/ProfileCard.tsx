import { User, UserAvatar } from '@/src/entities/user';
import { EditLink } from '@/src/features/profile/edit-profile';
import { query } from '@/src/shared/api/queryClient/query';
import LocationIcon from '@/src/shared/assets/location.svg';
import Card from '@/src/shared/ui/card/Card';
import Image from 'next/image';

export default async function ProfileCard() {
	const profile = await query<User>({ url: '/user/profile', auth: true });

	return (
		<Card
			variant='no-indent'
			className='flex items-end justify-between rounded border p-6 transition-colors'
		>
			<div className='flex items-end gap-x-5 '>
				<UserAvatar
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
