import { useUserStore } from '@/src/entities/user';
import '@/styles/globals.scss';
import { fireEvent, render, screen } from '@testing-library/react';
import AvatarDropdown from './AvatarDropdown';

describe('AvatarDropdown', () => {
	beforeEach(() => {
		useUserStore.setState(
			{
				email: 'test@test.com',
				name: 'Test',
				lastname: 'Test',
			},
			true
		);
		render(<AvatarDropdown />);
	});
	it('renders a avatar dropdown', () => {
		const component = screen.getByTestId('avatar-dropdown');

		expect(component).toBeInTheDocument();
	});
	it('opens on click', () => {
		const button = screen.getByTestId('avatar-dropdown-button');

		const dropdownPanel = screen.getByTestId('avatar-dropdown-panel');

		const arrow = screen.getByTestId('avatar-dropdown-arrow');

		expect(arrow).not.toHaveClass('rotate-180');
		expect(dropdownPanel).toHaveClass('invisible');

		fireEvent.click(button);

		expect(arrow).toHaveClass('rotate-180');
		expect(dropdownPanel).not.toHaveClass('invisible');
	});
	it('profile heading should display user data', () => {
		const profileHeading = screen.getByTestId(
			'avatar-dropdown-profile-heading'
		);

		expect(profileHeading).toHaveTextContent('Test Test');
		expect(profileHeading).toHaveTextContent('test@test.com');
	});
});
