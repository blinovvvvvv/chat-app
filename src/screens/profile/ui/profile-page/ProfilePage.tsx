import { Page } from '@/src/widgets/page';
import { ProfileCard } from '@/src/widgets/profile-card';
import { memo } from 'react';

async function ProfilePage() {
	return (
		<Page>
			<ProfileCard />
		</Page>
	);
}

export default memo(ProfilePage);
