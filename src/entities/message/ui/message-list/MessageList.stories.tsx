import type { Meta, StoryObj } from '@storybook/react';
import MessageList from './MessageList';

const meta: Meta<typeof MessageList> = {
	component: MessageList,
};

export default meta;
type Story = StoryObj<typeof MessageList>;

const mockMessage = {
	createdAt: 'test',
	updatedAt: 'test',
	id: 'test-message',
	Dialog: {
		createdAt: 'test',
		updatedAt: 'test',
		id: 'test-dialog',
		members: [
			{
				avatarPath: '',
				city: 'Test city',
				email: 'test@test.com',
				isAdmin: false,
				lastname: 'Test',
				name: 'Test',
			},
			{
				avatarPath: '',
				city: 'Test city',
				email: 'test@test.com',
				isAdmin: false,
				lastname: 'Test',
				name: 'Test',
			},
		],
		messages: [],
	},
	text: 'Test',
	User: {
		avatarPath: '',
		city: 'Test city',
		email: 'test@test.com',
		isAdmin: false,
		lastname: 'Test',
		name: 'Test',
	},
};

export const Default: Story = {
	args: {
		messages: new Array(20).fill(mockMessage),
	},
};
