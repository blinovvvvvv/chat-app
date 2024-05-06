import { create } from 'zustand';
import { User } from '../types/user.types';

export const useUserStore = create<User>(() => ({
	avatarPath: '',
	name: '',
	email: '',
	id: '',
	city: '',
	isAdmin: false,
	lastname: '',
}));

export const initializeUserStore = (data: User) => useUserStore.setState(data);
