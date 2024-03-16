import { create } from 'zustand';

type AuthCardTab = 'login' | 'signup';

type AuthCardStore = {
	// tab windows between login and signup
	tab: AuthCardTab;

	// user credentials
	email: string;
	password: string;
};

type AuthCardAction = {
	/** tab windows between login and signup */
	changeTab: (tab: AuthCardTab) => void;

	/** change user credentials */
	changeEmail: (email: string) => void;
	changePassword: (password: string) => void;
};

export const useAuthCardStore = create<AuthCardStore & AuthCardAction>(
	(set) => ({
		tab: 'login',

		email: '',
		password: '',

		changeTab: (tab: AuthCardTab) => set({ tab }),
		changeEmail: (email: string) => set({ email }),
		changePassword: (password: string) => set({ password }),
	})
);
