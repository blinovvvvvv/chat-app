import { IDialog } from '@/src/entities/dialog';
import { User } from '@/src/entities/user';
import { IdTimestamps } from '@/src/shared/types/IdTimestamps';

export interface IMessage extends IdTimestamps {
	text: string;
	User: User;
	Dialog: IDialog;
}
