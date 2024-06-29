import type { Meta, StoryObj } from '@storybook/react';
import CreateDialogButton from './CreateDialogButton';

const meta: Meta<typeof CreateDialogButton> = {
	component: CreateDialogButton,
};

export default meta;
type Story = StoryObj<typeof CreateDialogButton>;

export const Default: Story = {
	args: {
		friendId: 'test',
	},
};
