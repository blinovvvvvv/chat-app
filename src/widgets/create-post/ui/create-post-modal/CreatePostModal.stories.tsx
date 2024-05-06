import type { Meta, StoryObj } from '@storybook/react';
import CreatePostModal from './CreatePostModal';

const meta: Meta<typeof CreatePostModal> = {
	component: CreatePostModal,
};

export default meta;
type Story = StoryObj<typeof CreatePostModal>;

export const Default: Story = {
	args: {
		isOpenModal: true,
	},
};
