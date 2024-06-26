import { User } from '@/src/entities/user';
import { CreateDialogButton } from '@/src/features/dialog/create-dialog';
import { SubscribeFriend } from '@/src/features/user/subscribe-friend';
import { query } from '@/src/shared/api/queryClient/query';
import { Page } from '@/src/widgets/page';
import { ProfileCard } from '@/src/widgets/profile/profile-card';

interface UserProfileByIdPageProps {
	params: {
		id: string;
	};
}

export default async function UserProfileByIdPage({
	params,
}: UserProfileByIdPageProps) {
	const userProfile = await query<User>({
		url: `/user/${params.id}`,
		auth: true,
	});

	if (!userProfile.id) return null;

	return (
		<Page>
			<ProfileCard isOwn={false} profileId={userProfile.id}>
				<div className='flex gap-x-2'>
					<CreateDialogButton friendId={userProfile.id} />
					<SubscribeFriend friendProfile={userProfile} />
				</div>
			</ProfileCard>
		</Page>
	);
}
