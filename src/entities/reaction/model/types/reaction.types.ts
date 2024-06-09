import { User } from '@/src/entities/user';
import { IdTimestamps } from '@/src/shared/types/IdTimestamps';

export interface Reaction extends IdTimestamps {
	name: string;
	postId: string;
	userId: string;
	User: User;
}
