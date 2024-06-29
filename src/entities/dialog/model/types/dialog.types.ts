import { IMessage } from '@/src/entities/message';
import { User } from '@/src/entities/user';
import { IdTimestamps } from '@/src/shared/types/IdTimestamps';

export interface IDialog extends IdTimestamps {
	members: User[];
	messages: IMessage[];
}
