import { User } from '@/src/entities/user';
import { IdTimestamps } from '@/src/shared/types/IdTimestamps';

export interface Subscription extends IdTimestamps {
	fromUserId: string;
	toUserId: string;

	fromUser: User;
	toUser: User;
}
