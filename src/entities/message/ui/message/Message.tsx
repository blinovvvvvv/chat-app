import Avatar from '@/src/shared/ui/avatar/Avatar';
import clsx from 'clsx';
import Link from 'next/link';
import { IMessage } from '../../model/types/message.types';

interface MessageProps {
	message: IMessage;
	className?: string;
}

export default function Message({ message, className }: MessageProps) {
	const { avatarPath, name, lastname, id } = message.User;

	return (
		<div className={clsx('flex items-center gap-2.5', className)}>
			<Avatar width={35} height={35} path={avatarPath} />
			<div className='flex flex-col'>
				<Link href={`/user/${id}`}>
					<p className='text-xs font-medium text-blue'>
						{name} {lastname}
					</p>
				</Link>
				<span className='max-w-[400px] text-xs font-medium'>
					{message.text}
				</span>
			</div>
		</div>
	);
}
