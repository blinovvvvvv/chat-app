'use server';

import { query } from '@/src/shared/api/queryClient/query';
import { cache } from 'react';
import { PostPaginationResponse } from '../../model/types/post.types';

export const fetchInitialPosts = cache(
	async (): Promise<PostPaginationResponse> => {
		try {
			return query({
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
	}
);
