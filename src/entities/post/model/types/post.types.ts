import { User } from '@/src/entities/user';
import { IdTimestamps } from '@/src/shared/types/IdTimestamps';

export interface Post extends IdTimestamps {
	text: string;
	imagePath?: string;
	User: User;
	comments: [];
	reactions: [];
}

export interface PostPaginationResponse {
	data: Post[];
	currentPage: number;
	lastPage: number;
}
