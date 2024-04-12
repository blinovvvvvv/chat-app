import { render, screen } from '@testing-library/react';
import EditForm from './EditForm';

jest.mock('react-dom', () => ({
	...jest.requireActual('react-dom'),
	useFormState: () => [{}, () => {}],
	useFormStatus: () => ({ pending: false }),
}));

describe('EditForm', () => {
	beforeEach(() => {
		render(
			<EditForm
				profile={{
					name: 'Name',
					lastname: 'Lastname',
					city: 'City',
					avatarPath: '/avatar.jpg',
					email: 'email@email.com',
					id: 'id',
					isAdmin: false,
				}}
			/>
		);
	});
	it('renders edit form', () => {
		const comp = screen.getByTestId('edit-form');

		expect(comp).toBeInTheDocument();
	});
	it('all inputs have default values', () => {
		const nameInput = screen.getByPlaceholderText('Your first name');
		const lastnameInput = screen.getByPlaceholderText('Your last name');
		const cityInput = screen.getByPlaceholderText('Your city');

		expect(nameInput).toBeInTheDocument();
		expect(nameInput).toHaveValue('Name');

		expect(lastnameInput).toBeInTheDocument();
		expect(lastnameInput).toHaveValue('Lastname');

		expect(cityInput).toBeInTheDocument();
		expect(cityInput).toHaveValue('City');
	});
});
