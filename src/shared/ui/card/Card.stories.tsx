import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
	component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
	args: {
		children: 'Card',
	},
};

export const Clear: Story = {
	args: {
		children: 'Card',
		variant: 'clear',
	},
};

export const NoIndent: Story = {
	args: {
		children: 'Card',
		variant: 'no-indent',
	},
};
