'use server';

import { query } from '@/src/shared/api/queryClient/query';

interface AddCommentDto {
	postId: string;
	text: string;
}

export async function addComment({ postId, text }: AddCommentDto) {
	try {
		if (text) {
			await query<any, AddCommentDto>({
				url: `/comment/create`,
				method: 'POST',
				body: {
					postId,
					text,
				},
				auth: true,
			});
		}
	} catch (error) {
		console.error(error);
	}
}
