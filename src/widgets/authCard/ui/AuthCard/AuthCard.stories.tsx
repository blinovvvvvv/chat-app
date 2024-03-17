import type { Meta, StoryObj } from '@storybook/react';
import AuthCard from './AuthCard';

const meta: Meta<typeof AuthCard> = {
	component: AuthCard,
};

export default meta;
type Story = StoryObj<typeof AuthCard>;

export const Default: Story = {};
