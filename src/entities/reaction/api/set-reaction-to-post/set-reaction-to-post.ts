import { query } from '@/src/shared/api/queryClient/query';
import { revalidateTag } from 'next/cache';
import { SelectReaction } from '../../model/types/reaction.types';

export const setReactionToPost = async (
	postId: string,
	reaction: SelectReaction
) => {
	try {
		await query<boolean, { name: SelectReaction }>({
			url: `/post/reaction/${postId}`,
			method: 'POST',
			auth: true,
			client: true,
			body: {
				name: reaction,
			},
		});

		revalidateTag(`post-${postId}`);
	} catch (error) {
		console.log(error);
	}
};
