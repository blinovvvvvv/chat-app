import { EditLink } from '@/src/features/profile/edit-profile';
import { Page } from '@/src/widgets/page';
import { ProfileCard } from '@/src/widgets/profile/profile-card';

export default async function ProfilePage() {
	return (
		<Page>
			<ProfileCard isOwn>
				<EditLink />
			</ProfileCard>
		</Page>
	);
}
