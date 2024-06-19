import type { Meta, StoryObj } from '@storybook/react';
import ReactionsListPanel from './ReactionsListPanel';

const meta: Meta<typeof ReactionsListPanel> = {
	component: ReactionsListPanel,
};

export default meta;
type Story = StoryObj<typeof ReactionsListPanel>;

export const Default: Story = {
	args: {
		onReactionClick: () => {},
		visible: true,
	},
};
