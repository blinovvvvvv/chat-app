import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AuthCard from './AuthCard';

describe('Page', () => {
	it('renders a heading', () => {
		render(<AuthCard />);

		const heading = screen.getByRole('heading', { level: 1 });

		expect(heading).toBeInTheDocument();
	});
});
