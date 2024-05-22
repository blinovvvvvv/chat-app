import type { Meta, StoryObj } from '@storybook/react';
import PostCard from './PostCard';

const meta: Meta<typeof PostCard> = {
	component: PostCard,
};

export default meta;
type Story = StoryObj<typeof PostCard>;

export const Default: Story = {
	args: {
		id: '6a36a028-b052-4676-aee7-b008ffdb5333',
	},
};
