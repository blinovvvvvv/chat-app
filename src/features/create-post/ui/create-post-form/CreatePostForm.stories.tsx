import type { Meta, StoryObj } from '@storybook/react';
import CreatePostForm from './CreatePostForm';

const meta: Meta<typeof CreatePostForm> = {
	component: CreatePostForm,
};

export default meta;
type Story = StoryObj<typeof CreatePostForm>;

export const Default: Story = {};
