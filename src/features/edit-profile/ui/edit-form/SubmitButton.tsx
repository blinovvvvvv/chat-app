'use client';

import Button from '@/src/shared/ui/button/Button';
import { memo } from 'react';
import { useFormStatus } from 'react-dom';

function SubmitButton() {
	const { pending } = useFormStatus();
	return (
		<Button type='submit' disabled={pending} aria-busy={pending}>
			Save
		</Button>
	);
}

export default memo(SubmitButton);
