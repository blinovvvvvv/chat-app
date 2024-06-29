import { User } from '@/src/entities/user';
import { IdTimestamps } from '@/src/shared/types/IdTimestamps';

export interface IDialog extends IdTimestamps {
	members: User[];
	//FIXME: add message entity
	messages: [];
}
