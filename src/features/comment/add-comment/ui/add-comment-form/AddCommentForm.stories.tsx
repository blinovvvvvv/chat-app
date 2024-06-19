import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';

const meta: Meta<typeof AddCommentForm> = {
	component: AddCommentForm,
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Default: Story = {
	args: {
		postId: 'test',
		revalidate: () => {},
	},
};
