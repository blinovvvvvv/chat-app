import { User } from '@/src/entities/user';
import { EditForm } from '@/src/features/profile/edit-profile';
import { query } from '@/src/shared/api/queryClient/query';
import { Page } from '@/src/widgets/page';
import { memo } from 'react';

async function EditProfile() {
	const profile = await query<User>({ url: '/user/profile', auth: true });

	return (
		<Page>
			<EditForm profile={profile} />
		</Page>
	);
}

export default memo(EditProfile);
