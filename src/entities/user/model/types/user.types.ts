import { IdTimestamps } from '@/src/shared/types/IdTimestamps';

export interface User extends Partial<IdTimestamps> {
	email: string;
	isAdmin: boolean;
	avatarPath: string;
	city: string;
	name: string;
	lastname: string;
}
