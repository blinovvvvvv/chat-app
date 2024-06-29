import type { Meta, StoryObj } from '@storybook/react';
import SendMessageForm from './SendMessageForm';

const meta: Meta<typeof SendMessageForm> = {
	component: SendMessageForm,
};

export default meta;
type Story = StoryObj<typeof SendMessageForm>;

export const Default: Story = {
	args: {},
};
