'use server';

import { query } from '@/src/shared/api/queryClient/query';
import { SelectReaction } from '../../model/types/add-reaction.types';

export const setReactionToPost = async (
	postId: string,
	reaction: SelectReaction
) => {
	try {
		await query<boolean, { name: SelectReaction }>({
			url: `/post/reaction/${postId}`,
			method: 'POST',
			auth: true,
			body: {
				name: reaction,
			},
		});
	} catch (error) {
		console.log(error);
	}
};
