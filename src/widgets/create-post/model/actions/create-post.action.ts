'use server';

import { query } from '@/src/shared/api/queryClient/query';
import { FileUploadResponse } from '@/src/shared/types/file-upload-response';
import { revalidatePath } from 'next/cache';

export async function createPost(formData: FormData) {
	const rawFormData = {
		text: formData.get('text'),
		image: formData.get('image') as File,
	};

	const isImageProvided =
		rawFormData.image.name !== 'undefined' && rawFormData.image.size > 0;

	try {
		let imagePath: string = '';

		if (isImageProvided) {
			const { url } = await query<FileUploadResponse, FormData>({
				url: '/media',
				method: 'POST',
				body: formData,
				options: {
					file: true,
				},
			});
			if (url) imagePath = url;
		}

		await query({
			url: '/post/create',
			method: 'POST',
			body: {
				text: rawFormData.text,
				...(isImageProvided && { imagePath }),
			},
		});

		revalidatePath('/feed');
	} catch (error) {
		throw new Error('failed to create post');
	}
}
