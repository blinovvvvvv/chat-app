import type { Meta, StoryObj } from '@storybook/react';
import CommentCountButton from './CommentCountButton';

const meta: Meta<typeof CommentCountButton> = {
	component: CommentCountButton,
};

export default meta;
type Story = StoryObj<typeof CommentCountButton>;

export const Default: Story = {
	args: {
		count: 10,
	},
};
