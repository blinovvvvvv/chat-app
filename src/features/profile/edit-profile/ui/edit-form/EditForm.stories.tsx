import type { Meta, StoryObj } from '@storybook/react';
import EditForm from './EditForm';

const meta: Meta<typeof EditForm> = {
	component: EditForm,
};

export default meta;
type Story = StoryObj<typeof EditForm>;

export const Default: Story = {
	args: {
		profile: {
			name: 'Name',
			lastname: 'Lastname',
			city: 'City',
			avatarPath: '/avatar.jpg',
			email: 'email@email.com',
			id: 'id',
			isAdmin: false,
		},
	},
};
