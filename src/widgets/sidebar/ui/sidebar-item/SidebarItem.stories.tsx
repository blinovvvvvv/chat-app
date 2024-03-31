import Profile from '@/src/shared/assets/profile.svg';
import type { Meta, StoryObj } from '@storybook/react';
import SidebarItem from './SidebarItem';

const meta: Meta<typeof SidebarItem> = {
	component: SidebarItem,
};

export default meta;
type Story = StoryObj<typeof SidebarItem>;

export const Default: Story = {
	args: {
		item: {
			icon: Profile,
			text: 'Profile',
			link: '/profile',
		},
	},
};
