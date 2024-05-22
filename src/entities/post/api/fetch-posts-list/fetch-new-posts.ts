import { query } from '@/src/shared/api/queryClient/query';
import { PostPaginationResponse } from '../../model/types/post.types';

export const fetchNewPosts = async (page: number) => {
	try {
		const { data } = await query<PostPaginationResponse>({
			url: `/post?page=${page}`,
		});

		return data;
	} catch (error) {
		console.error(error);
		return [];
	}
};
