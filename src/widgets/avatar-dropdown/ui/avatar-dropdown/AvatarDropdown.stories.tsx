import type { Meta, StoryObj } from '@storybook/react';
import AvatarDropdown from './AvatarDropdown';

const meta: Meta<typeof AvatarDropdown> = {
	component: AvatarDropdown,
};

export default meta;
type Story = StoryObj<typeof AvatarDropdown>;

export const Default: Story = {
	args: {},
};
