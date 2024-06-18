import type { Meta, StoryObj } from '@storybook/react';
import PostsList from './PostsList';

const meta: Meta<typeof PostsList> = {
	component: PostsList,
};

export default meta;
type Story = StoryObj<typeof PostsList>;

const mockPost = {
	id: '8e9ba508-b424-471c-834f-5335f126c6ad',
	createdAt: '2024-05-12T16:42:15.758Z',
	updatedAt: '2024-05-12T16:42:15.758Z',
	text: 'TEST',
	imagePath: null,
	User: {
		name: 'TEST',
		lastname: 'TEST',
		avatarPath: '/avatars/default-avatar.png',
		id: '1',
	},
	comments: [
		{
			id: '94fdd4d2-300b-4ef0-80f1-1938a499baad',
			createdAt: '2024-06-09T21:57:42.779Z',
			updatedAt: '2024-06-09T21:57:42.779Z',
			text: 'zzzz',
			postId: '8e9ba508-b424-471c-834f-5335f126c6ad',
			User: {
				name: 'TEST',
				lastname: 'TEST',
				avatarPath: '/avatars/default-avatar.png',
				id: '1',
			},
		},
	],
};

export const Default: Story = {
	args: {
		initialPosts: Array(20).fill(mockPost),
	},
};
