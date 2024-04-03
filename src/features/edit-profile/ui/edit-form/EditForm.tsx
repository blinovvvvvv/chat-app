import { User } from '@/src/entities/user';
import { updateProfile } from '@/src/entities/user/model/actions/update-profile.action';
import arrowIcon from '@/src/shared/assets/arrow.svg';
import Input from '@/src/shared/ui/input/Input';
import Image from 'next/image';
import Link from 'next/link';
import { memo } from 'react';
import SubmitButton from './SubmitButton';

function EditForm({ profile }: { profile: User }) {
	return (
		<div className='flex flex-col gap-y-3'>
			<Link
				aria-label='Return back to profile'
				className='flex items-center gap-x-1 self-start text-xs font-medium dark:text-gray-500'
				href={{ pathname: '/profile' }}
			>
				<Image className='rotate-90' src={arrowIcon} alt='Arrow' />
				<span>Back</span>
			</Link>
			<h1 className='text-l font-medium'>Edit your profile</h1>
			<form
				action={updateProfile}
				className='flex max-w-[400px] flex-col gap-y-3'
			>
				<Input
					name='name'
					defaultValue={profile.name}
					placeholder='Your first name'
					aria-label='Your first name'
				/>
				<Input
					name='lastname'
					defaultValue={profile.lastname}
					placeholder='Your last name'
					aria-label='Your last name'
				/>
				<Input
					name='city'
					defaultValue={profile.city}
					placeholder='Your city'
					aria-label='Your city'
				/>
				<SubmitButton />
			</form>
		</div>
	);
}

export default memo(EditForm);
