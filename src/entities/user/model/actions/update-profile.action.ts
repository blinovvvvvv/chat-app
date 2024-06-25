'use server';

import { query } from '@/src/shared/api/queryClient/query';
import { User } from '../types/user.types';

export async function updateProfile(formData: FormData) {
	const name = formData.get('name') as string;
	const lastname = formData.get('lastname') as string;
	const city = formData.get('city') as string;

	await query<User, Pick<User, 'name' | 'lastname' | 'city'>>({
		url: '/user/profile',
		method: 'PUT',
		body: { name, lastname, city },
		auth: true,
	});
}
