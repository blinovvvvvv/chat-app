import { query } from '@/src/shared/api/queryClient/query';
import { PostPaginationResponse } from '../../model/types/post.types';

export const fetchInitialPosts = async (): Promise<PostPaginationResponse> => {
	try {
		return await query({
			url: '/post',
			auth: true,
		});
	} catch (error) {
		console.log(error);

		return {
			data: [],
			currentPage: 0,
			lastPage: 0,
		};
	}
};
