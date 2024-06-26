import { User } from '@/src/entities/user';
import { query } from '@/src/shared/api/queryClient/query';
import { memo } from 'react';
import SubscribeFriendButton from '../subcribe-friend-button/SubscribeFriendButton';

interface SubscribeFriendProps {
	friendProfile: User;
}

async function SubscribeFriend({ friendProfile }: SubscribeFriendProps) {
	const userProfile = await query<User>({
		url: '/user/profile',
		auth: true,
		options: {
			next: {
				tags: ['user-profile'],
			},
		},
	});

	const isSubscribed = friendProfile.subscribers?.some(
		(subscribe) => subscribe.fromUserId === userProfile.id
	);

	if (!friendProfile.id) return null;

	return (
		<SubscribeFriendButton
			isSubscribed={isSubscribed || false}
			friendId={friendProfile.id}
		>
			{isSubscribed ? 'You are subscribed' : 'Subscribe'}
		</SubscribeFriendButton>
	);
}

export default memo(SubscribeFriend);
