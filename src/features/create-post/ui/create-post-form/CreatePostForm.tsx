import Avatar from '@/src/shared/ui/avatar/Avatar';
import Button from '@/src/shared/ui/button/Button';
import Card from '@/src/shared/ui/card/Card';
import { memo } from 'react';

function CreatePostForm() {
	return (
		<Button
			className='w-full'
			variant='clear'
			aria-label='Click to create your post!'
		>
			<Card className='flex w-full items-center gap-x-3'>
				<Avatar width={25} height={25} />
				<span className='text-xs font-medium dark:text-gray-600'>
					What&apos;s new with you?
				</span>
				{/* <textarea
				className='text-xs font-medium text-gray-600'
				placeholder="What's new with you?"
				name='text'
				rows={14}
				cols={10}
				wrap='soft'
			/> */}
			</Card>
		</Button>
	);
}

export default memo(CreatePostForm);
