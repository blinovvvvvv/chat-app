import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

const meta: Meta<typeof Input> = {
	component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		value: 'Value',
		placeholder: 'Placeholder',
	},
};

export const Small: Story = {
	args: {
		value: 'Value',
		placeholder: 'Placeholder',
		variant: 'small',
	},
};

export const Clear: Story = {
	args: {
		value: 'Value',
		placeholder: 'Placeholder',
		variant: 'clear',
	},
};
