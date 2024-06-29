'use client';

import { memo } from 'react';
import { Virtuoso } from 'react-virtuoso';
import { IMessage } from '../../model/types/message.types';
import Message from '../message/Message';

interface MessageListProps {
	messages: IMessage[];
	className?: string;
}

function MessageList({ messages, className }: MessageListProps) {
	return (
		<div className={className}>
			<Virtuoso
				alignToBottom
				data={messages}
				itemContent={(index, m) => <Message className='py-1.5' message={m} />}
				initialTopMostItemIndex={messages.length - 1}
				followOutput='smooth'
			/>
		</div>
	);
}

export default memo(MessageList);
