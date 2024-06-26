'use server';

import { query } from '@/src/shared/api/queryClient/query';
import { revalidateTag } from 'next/cache';

interface SubscribeFriendProps {
	friendId: string;
}

export default async function subscribeFriend({
	friendId,
}: SubscribeFriendProps) {
	try {
		await query({
			url: `/user/subscribe/${friendId}`,
			auth: true,
			method: 'PATCH',
		});
		revalidateTag('user-profile');
	} catch (error) {
		console.log(error);
	}
}
