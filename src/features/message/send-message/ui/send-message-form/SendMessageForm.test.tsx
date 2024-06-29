import { fireEvent, render, screen } from '@testing-library/react';
import SendMessageForm from './SendMessageForm';

describe('SendMessageForm', () => {
	beforeEach(() => {
		render(<SendMessageForm dialogId='test' />);
	});
	it('renders send message form', () => {
		const comp = screen.getByTestId('send-message-form');

		expect(comp).toBeInTheDocument();
	});
	it('send button should be disablen when input is empty', () => {
		const textInput = screen.getByTestId('text-input');
		const sendBtn = screen.getByTestId('send-button');

		expect(sendBtn).toBeDisabled();

		fireEvent.change(textInput, {
			target: { value: 'test' },
		});

		expect(sendBtn).not.toBeDisabled();
	});
});
