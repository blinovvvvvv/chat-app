import { query } from '@/src/shared/api/queryClient/query';
import { cache } from 'react';
import { Post } from '../../model/types/post.types';

export const fetchPostById = cache(async (id: string) => {
	try {
		return await query<Post>({
			url: `/post/${id}`,
			auth: true,
			client: true,
		});
	} catch (error) {
		console.log(error);
	}
});
