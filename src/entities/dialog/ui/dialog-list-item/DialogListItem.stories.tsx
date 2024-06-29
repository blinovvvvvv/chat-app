import type { Meta, StoryObj } from '@storybook/react';
import DialogListItem from './DialogListItem';

const meta: Meta<typeof DialogListItem> = {
	component: DialogListItem,
};

export default meta;
type Story = StoryObj<typeof DialogListItem>;

const mockDialog = {
	createdAt: 'test',
	id: 'test',
	updatedAt: 'test',
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
	messages: [
		{
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
		},
	],
};

export const Default: Story = {
	args: {
		dialog: mockDialog,
	},
};
