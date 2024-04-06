import type { Meta, StoryObj } from '@storybook/react';
import SubmitButton from './SubmitButton';

const meta: Meta<typeof SubmitButton> = {
	component: SubmitButton,
};

export default meta;
type Story = StoryObj<typeof SubmitButton>;

export const Default: Story = {};
