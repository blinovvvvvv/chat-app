import '@/styles/globals.scss';
import { fireEvent, render, screen } from '@testing-library/react';
import AddCommentForm from './AddCommentForm';

describe('AddCommentForm', () => {
	beforeEach(() => {
		render(<AddCommentForm postId='test' revalidate={() => {}} />);
	});
	it('renders a add comment form', () => {
		const component = screen.getByTestId('add-comment-form');

		expect(component).toBeInTheDocument();
	});
	it('submit button should be disabled when text input is empty', () => {
		const textInput = screen.getByTestId('add-comment-form-text');

		const submitBtn = screen.getByTestId('add-comment-form-submit');

		expect(submitBtn).toBeDisabled();

		fireEvent.change(textInput, {
			target: {
				value: 'text',
			},
		});

		expect(submitBtn).not.toBeDisabled();
	});
});
