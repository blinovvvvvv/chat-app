import type { Meta, StoryObj } from '@storybook/react';
import PostsList from './PostsList';

const meta: Meta<typeof PostsList> = {
	component: PostsList,
};

export default meta;
type Story = StoryObj<typeof PostsList>;

//FIXME: add story case
export const Default: Story = {
	args: {},
};
