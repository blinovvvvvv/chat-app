'use client';

import { useUserStore } from '@/src/entities/user';
import { socket } from '@/src/shared/api/socket/socket';
import Button from '@/src/shared/ui/button/Button';
import Input from '@/src/shared/ui/input/Input';
import clsx from 'clsx';
import { FormEvent, memo, useCallback, useState } from 'react';

interface SendMessageFormProps {
	dialogId: string;
	className?: string;
}

export interface SendMessageProps {
	dialogId: string;
	userId: string;
	text: string;
}

function SendMessageForm({ dialogId, className }: SendMessageFormProps) {
	const userId = useUserStore((state) => state.id);

	const [text, setText] = useState('');

	const handleSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();

			socket.emit('send_message', {
				dialogId,
				userId,
				text,
			});
			setText('');
		},
		[dialogId, text, userId]
	);

	return (
		<form
			className={clsx('-mx-4 border-t border-dark-gray-200', className)}
			onSubmit={handleSubmit}
		>
			<div className='flex gap-6 px-6 py-3.5'>
				<Input
					className='flex-grow'
					variant='small'
					value={text}
					onChange={setText}
					placeholder='Write message...'
				/>
				<Button variant='clear' disabled={!text} type='submit'>
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							className={clsx('transition-colors', {
								['fill-dark-gray-200']: !text,
								['fill-blue']: text,
							})}
							fillRule='evenodd'
							clipRule='evenodd'
							d='M0.345991 0.245057C0.495244 0.115395 0.679583 0.0328917 0.875711 0.00797385C1.07184 -0.016944 1.27095 0.0168424 1.44788 0.105063L19.4461 9.10472C19.6125 9.18765 19.7525 9.31533 19.8503 9.47342C19.9482 9.63152 20 9.81376 20 9.99968C20 10.1856 19.9482 10.3678 19.8503 10.5259C19.7525 10.684 19.6125 10.8117 19.4461 10.8946L1.44788 19.8943C1.27096 19.9828 1.07176 20.0169 0.875484 19.9922C0.679206 19.9674 0.494672 19.885 0.345234 19.7554C0.195797 19.6258 0.0881717 19.4547 0.0359775 19.2639C-0.0162167 19.073 -0.0106338 18.871 0.0520196 18.6833L2.61377 10.9996H8.00024C8.26543 10.9996 8.51976 10.8943 8.70728 10.7068C8.8948 10.5192 9.00014 10.2649 9.00014 9.99968C9.00014 9.73448 8.8948 9.48013 8.70728 9.2926C8.51976 9.10507 8.26543 8.99972 8.00024 8.99972H2.61377L0.0510195 1.31602C-0.0113111 1.12844 -0.0166523 0.926587 0.0356704 0.735972C0.0879932 0.545356 0.196632 0.374525 0.345991 0.245057Z'
						/>
					</svg>
				</Button>
			</div>
		</form>
	);
}

export default memo(SendMessageForm);
