import { User } from '@/src/entities/user';
import { IdTimestamps } from '@/src/shared/types/IdTimestamps';

export interface IComment extends IdTimestamps {
	text: string;
	postId: string;

	User: Pick<User, 'name' | 'lastname' | 'avatarPath' | 'id'>;
}
