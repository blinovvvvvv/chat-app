import '@/styles/globals.scss';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import CreatePostModal from './CreatePostModal';

describe('CreatePostModal', () => {
	beforeEach(() => {
		render(<CreatePostModal isOpenModal />);
	});
	it('renders a create post modal', () => {
		const component = screen.getByTestId('create-post-modal');

		expect(component).toBeInTheDocument();
	});
	it('button disabled when text input is empty', () => {
		const submitBtn = screen.getByTestId('create-post-modal-submit');

		const textInput = screen.getByTestId('create-post-modal-text');

		expect(submitBtn).toBeDisabled();

		act(() => {
			fireEvent.change(textInput, { target: { value: 'teeeeest' } });
		});

		expect(submitBtn).not.toBeDisabled();
	});
});
