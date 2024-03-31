import { fireEvent, render, screen } from '@testing-library/react';
import ToggleTheme from './ToggleTheme';

describe('ToggleTheme', () => {
	beforeEach(() => {
		render(<ToggleTheme />);
	});
	it('renders a toggle theme', () => {
		const component = screen.getByTestId('toggle-theme');

		expect(component).toBeInTheDocument();
	});
	it('changes the theme', () => {
		const toggleBtn = screen.getByRole('button');

		expect(toggleBtn).toHaveTextContent('Disabled');

		fireEvent.click(toggleBtn);

		expect(toggleBtn).toHaveTextContent('Enabled');
	});
});
