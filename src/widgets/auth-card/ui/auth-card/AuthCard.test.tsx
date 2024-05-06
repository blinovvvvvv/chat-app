import { fireEvent, render, screen } from '@testing-library/react';
import AuthCard from './AuthCard';

describe('AuthCard', () => {
	beforeEach(() => render(<AuthCard />));
	it('renders a auth card', () => {
		const component = screen.getByTestId('auth-card');

		expect(component).toBeInTheDocument();
	});
	it('changes the tab', () => {
		const loginCardForm = screen.getByTestId('login-card-form');
		const loginCardBtn = screen.getByTestId('login-card-change-tab');

		const signupCard = screen.getByTestId('signup-card');
		const signupCardBtn = screen.getByTestId('signup-card-change-tab');

		expect(loginCardForm).toBeVisible();
		expect(loginCardBtn).toBeVisible();

		expect(signupCard).toHaveClass('hidden');

		fireEvent.click(loginCardBtn);

		expect(loginCardForm).toHaveClass('hidden');
		expect(signupCard).not.toHaveClass('hidden');

		fireEvent.click(signupCardBtn);

		expect(loginCardForm).not.toHaveClass('hidden');
		expect(signupCard).toHaveClass('hidden');
	});
	it('changes the inputs value and saves it', () => {
		const loginEmail = screen.getByTestId('login-card-email');
		const loginPassword = screen.getByTestId('login-card-password');

		fireEvent.change(loginEmail, {
			target: {
				value: 'test',
			},
		});
		fireEvent.change(loginPassword, {
			target: {
				value: 'test1234',
			},
		});

		expect(loginEmail).toHaveValue('test');
		expect(loginPassword).toHaveValue('test1234');

		const loginBtn = screen.getByTestId('login-card-change-tab');

		fireEvent.click(loginBtn);

		const signupEmail = screen.getByTestId('signup-card-email');
		const signupPassword = screen.getByTestId('signup-card-password');

		expect(signupEmail).toHaveValue('test');
		expect(signupPassword).toHaveValue('test1234');
	});
});
