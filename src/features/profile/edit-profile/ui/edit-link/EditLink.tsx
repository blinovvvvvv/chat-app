import Link from 'next/link';
import { memo } from 'react';

function EditLink() {
	return (
		<Link
			className='rounded bg-blue px-10 py-2 text-xs font-medium text-white dark:bg-dark-gray-300'
			href='/profile/edit'
		>
			Edit profile
		</Link>
	);
}

export default memo(EditLink);
