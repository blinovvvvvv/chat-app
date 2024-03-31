import Feed from '@/src/shared/assets/feed.svg';
import Friends from '@/src/shared/assets/friends.svg';
import Message from '@/src/shared/assets/message.svg';
import Music from '@/src/shared/assets/music.svg';
import Profile from '@/src/shared/assets/profile.svg';
import Video from '@/src/shared/assets/video.svg';
import { SidebarItem } from '../types/sidebar.types';

export const sidebarItems: SidebarItem[] = [
	{
		text: 'My Profile',
		icon: Profile,
		link: '/profile',
	},
	{
		text: 'Feed',
		icon: Feed,
		link: '/feed',
	},
	{
		text: 'Messages',
		icon: Message,
		link: '/messages',
	},
	{
		text: 'Friends',
		icon: Friends,
		link: '/friends',
	},
	{
		text: 'Music',
		icon: Music,
		link: '/music',
	},
	{
		text: 'Video',
		icon: Video,
		link: '/video',
	},
];
