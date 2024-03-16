import type { Meta, StoryObj } from '@storybook/react';
import SignUpCard from './SignUpCard';

const meta: Meta<typeof SignUpCard> = {
	component: SignUpCard,
};

export default meta;
type Story = StoryObj<typeof SignUpCard>;

export const Default: Story = {
	args: {
		email: 'test@test.com',
		password: 'password',
	},
};
