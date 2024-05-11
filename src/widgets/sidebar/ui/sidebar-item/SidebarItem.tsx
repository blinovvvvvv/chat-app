'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { memo } from 'react';
import type { SidebarItem } from '../../model/types/sidebar.types';

function SidebarItem({ item }: { item: SidebarItem }) {
	const pathname = usePathname();
	const isActive = pathname === item.link;

	return (
		<li>
			<Link
				href={{
					pathname: item.link,
				}}
				className={clsx(
					'flex items-center gap-x-[10px] rounded-s px-[10px] py-[6px] transition-colors dark:hover:bg-dark-gray-500',
					{
						['dark:bg-dark-gray-500']: isActive,
					}
				)}
			>
				<Image src={item.icon} alt='icon' width={18} height={18} />
				<span className='font-medium'>{item.text}</span>
			</Link>
		</li>
	);
}

export default memo(SidebarItem);
