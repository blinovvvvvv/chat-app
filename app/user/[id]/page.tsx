import { UserProfileByIdPage } from '@/src/screens/user-profile-by-id';

export default function UserProfileById({
	params,
}: {
	params: { id: string };
}) {
	return <UserProfileByIdPage params={params} />;
}
