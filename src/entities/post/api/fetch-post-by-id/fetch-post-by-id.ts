'use client';

import { query } from '@/src/shared/api/queryClient/query';
import { Post } from '../../model/types/post.types';

export const fetchPostById = async (id: string) => {
	try {
		return await query<Post>({
			url: `/post/${id}`,
			auth: true,
			options: {
				next: {
					tags: [`post-${id}`],
				},
			},
			client: true,
		});
	} catch (error) {
		console.log(error);
	}
};
