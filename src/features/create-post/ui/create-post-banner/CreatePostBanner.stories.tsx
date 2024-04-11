import type { Meta, StoryObj } from '@storybook/react';
import CreatePostBanner from './CreatePostBanner';

const meta: Meta<typeof CreatePostBanner> = {
	component: CreatePostBanner,
};

export default meta;
type Story = StoryObj<typeof CreatePostBanner>;

export const Default: Story = {};
