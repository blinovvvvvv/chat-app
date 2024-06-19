import { useUserStore } from '@/src/entities/user';
import { query } from '@/src/shared/api/queryClient/query';
import '@/styles/globals.scss';
import { fireEvent, render, screen } from '@testing-library/react';
import AddReactionButton from './AddReactionButton';

const unmockedFetch = global.fetch;

jest.mock('@/src/shared/api/queryClient/query');

beforeAll(() => {
	global.fetch = () =>
		//@ts-ignore
		Promise.resolve({
			json: () => Promise.resolve([]),
		});
});

afterAll(() => {
	global.fetch = unmockedFetch;
});

describe('AddReactionButton', () => {
	beforeEach(() => {
		useUserStore.setState({
			id: 'testUser',
		});
		render(
			<AddReactionButton
				post={{
					id: 'test',
					comments: [],
					text: 'test',
					createdAt: '',
					reactions: [
						{
							name: 'blame',
							createdAt: '',
							id: 'testR',
							postId: 'test',
							updatedAt: '',
							User: {
								avatarPath: '',
								city: 'Test',
								email: 'test@test.com',
								isAdmin: false,
								lastname: 'Test',
								name: 'Test',
								id: 'testUser',
							},
						},
					],
					updatedAt: '',
					User: {
						avatarPath: '',
						city: 'Test',
						email: 'test@test.com',
						isAdmin: false,
						lastname: 'Test',
						name: 'Test',
						id: 'testUser',
					},
				}}
				revalidate={() => {}}
			/>
		);
	});
	it('renders a add reaction button', () => {
		const component = screen.getByTestId('add-reaction-button');

		expect(component).toBeInTheDocument();
	});
	it('panel should appear on button hover', () => {
		const btn = screen.getByTestId('add-reaction-button');

		const panel = screen.getByTestId('add-reaction-panel');

		expect(panel).toHaveClass('invisible');
		expect(panel).toHaveAttribute('aria-disabled', 'true');

		fireEvent.mouseEnter(btn);

		expect(panel).not.toHaveClass('invisible');
		expect(panel).toHaveAttribute('aria-disabled', 'false');

		fireEvent.mouseEnter(panel);

		expect(panel).not.toHaveClass('invisible');
		expect(panel).toHaveAttribute('aria-disabled', 'false');

		fireEvent.mouseLeave(panel);

		expect(panel).toHaveClass('invisible');
		expect(panel).toHaveAttribute('aria-disabled', 'true');
	});
	it('panel should appear on button hover', () => {
		const btn = screen.getByTestId('add-reaction-button');

		const panel = screen.getByTestId('add-reaction-panel');

		expect(panel).toHaveClass('invisible');
		expect(panel).toHaveAttribute('aria-disabled', 'true');

		fireEvent.mouseEnter(btn);

		expect(panel).not.toHaveClass('invisible');
		expect(panel).toHaveAttribute('aria-disabled', 'false');

		fireEvent.mouseEnter(panel);

		expect(panel).not.toHaveClass('invisible');
		expect(panel).toHaveAttribute('aria-disabled', 'false');

		fireEvent.mouseLeave(panel);

		expect(panel).toHaveClass('invisible');
		expect(panel).toHaveAttribute('aria-disabled', 'true');
	});
	it('reaction should be set on click', () => {
		const btn = screen.getByTestId('add-reaction-button');

		fireEvent.click(btn);

		expect(query).toHaveBeenCalledWith(
			expect.objectContaining({
				body: { name: 'like' },
				auth: true,
				url: '/post/reaction/test',
				method: 'POST',
			})
		);
	});
});
