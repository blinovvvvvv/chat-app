import type { Meta, StoryObj } from '@storybook/react';
import ReactionIcon from './ReactionIcon';

const meta: Meta<typeof ReactionIcon> = {
	component: ReactionIcon,
};

export default meta;
type Story = StoryObj<typeof ReactionIcon>;

export const Blame: Story = {
	args: {
		name: 'blame',
	},
};

export const Like: Story = {
	args: {
		name: 'like',
	},
};
