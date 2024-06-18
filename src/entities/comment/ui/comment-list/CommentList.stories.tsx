import type { Meta, StoryObj } from '@storybook/react';
import { IComment } from '../..';
import CommentList from './CommentList';

const meta: Meta<typeof CommentList> = {
	component: CommentList,
};

export default meta;
type Story = StoryObj<typeof CommentList>;

const mockComment: IComment = {
	id: '94fdd4d2-300b-4ef0-80f1-1938a499baad',
	createdAt: '2024-06-09T21:57:42.779Z',
	updatedAt: '2024-06-09T21:57:42.779Z',
	text: 'test',
	postId: '8e9ba508-b424-471c-834f-5335f126c6ad',
	User: {
		name: 'Test',
		lastname: 'Test',
		avatarPath: '/avatars/default-avatar.png',
		id: '1',
	},
};

export const Default: Story = {
	args: {
		comments: Array(10).fill(mockComment),
	},
};
