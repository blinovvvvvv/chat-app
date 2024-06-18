import '@/styles/globals.scss';
import { fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import CreatePostBanner from './CreatePostBanner';

describe('CreatePostBanner', () => {
	beforeEach(() => {
		render(<CreatePostBanner />);
	});
	it('renders a create post banner', () => {
		const component = screen.getByTestId('create-post-banner');

		expect(component).toBeInTheDocument();
	});
	it('opens modal on click', () => {
		const banner = screen.getByTestId('create-post-banner');

		const modal = screen.getByTestId('create-post-modal');

		expect(modal).toHaveClass('opacity-0');
		expect(modal).toHaveAttribute('aria-disabled', 'true');

		act(() => {
			fireEvent.click(banner);
		});

		expect(modal).toHaveAttribute('aria-disabled', 'false');
		expect(modal).toHaveClass('opacity-100');
	});
});
