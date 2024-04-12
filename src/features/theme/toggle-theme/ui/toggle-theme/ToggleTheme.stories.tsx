import type { Meta, StoryObj } from '@storybook/react';
import ToggleTheme from './ToggleTheme';

const meta: Meta<typeof ToggleTheme> = {
	component: ToggleTheme,
};

export default meta;
type Story = StoryObj<typeof ToggleTheme>;

export const Default: Story = {
	args: {},
};
