import { create } from 'zustand';

interface CreatePostStoreState {
	textValue: string;
	image?: Blob | MediaSource;
}

interface CreatePostStoreActions {
	setTextValue: (textValue: string) => void;
	setImage: (image?: Blob | MediaSource) => void;
}

export const useCreatePostStore = create<
	CreatePostStoreState & CreatePostStoreActions
>((set) => ({
	image: undefined,
	textValue: '',

	setImage: (image?: Blob | MediaSource) => set({ image }),
	setTextValue: (textValue: string) => set({ textValue }),
}));
