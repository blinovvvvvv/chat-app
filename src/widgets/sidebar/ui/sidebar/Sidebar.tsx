import { memo } from 'react';
import { sidebarItems } from '../../model/data/sidebar.data';
import SidebarItem from '../sidebar-item/SidebarItem';

function Sidebar() {
	return (
		<nav>
			<ul className='flex flex-col'>
				{sidebarItems.map((item) => (
					<SidebarItem item={item} key={item.link} />
				))}
			</ul>
		</nav>
	);
}

export default memo(Sidebar);
