import { User, updateProfile } from '@/src/entities/user';
import arrowIcon from '@/src/shared/assets/arrow.svg';
import Input from '@/src/shared/ui/input/Input';
import Image from 'next/image';
import Link from 'next/link';
import SubmitButton from '../submit-button/SubmitButton';

export default function EditForm({ profile }: { profile: User }) {
	return (
		<div className='flex flex-col gap-y-3' data-testid='edit-form'>
			<Link
				aria-label='Return back to profile'
				className='flex items-center gap-x-1 self-start text-xs font-medium dark:text-gray-500'
				href='/profile'
			>
				<Image className='rotate-90' src={arrowIcon} alt='Arrow' />
				<span>Back</span>
			</Link>
			<h1 className='text-l font-medium'>Edit your profile</h1>
			<form
				action={updateProfile}
				className='flex max-w-[400px] flex-col gap-y-3'
			>
				<div>
					<label
						htmlFor='name'
						className='mb-1 block text-xs font-medium text-gray-400'
					>
						Name
					</label>
					<Input
						id='name'
						name='name'
						defaultValue={profile.name}
						placeholder='Your first name'
						aria-label='Your first name'
					/>
				</div>
				<div>
					<label
						htmlFor='lastname'
						className='mb-1 block text-xs font-medium text-gray-400'
					>
						Lastname
					</label>
					<Input
						id='lastname'
						name='lastname'
						defaultValue={profile.lastname}
						placeholder='Your last name'
						aria-label='Your last name'
					/>
				</div>
				<div>
					<label
						htmlFor='city'
						className='mb-1 block text-xs font-medium text-gray-400'
					>
						City
					</label>
					<Input
						id='city'
						name='city'
						defaultValue={profile.city}
						placeholder='Your city'
						aria-label='Your city'
					/>
				</div>
				<SubmitButton />
			</form>
		</div>
	);
}
