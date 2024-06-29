import type { Meta, StoryObj } from '@storybook/react';
import DialogList from './DialogList';

const meta: Meta<typeof DialogList> = {
	component: DialogList,
};

export default meta;
type Story = StoryObj<typeof DialogList>;

export const Default: Story = {
	args: {},
};
