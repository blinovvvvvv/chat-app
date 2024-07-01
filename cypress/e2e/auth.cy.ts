function generateRandomEmail(): string {
	const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
	let email = '';
	for (let i = 0; i < Math.floor(Math.random() * 6) + 5; i++) {
		email += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	email += '@';

	const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
	email += domains[Math.floor(Math.random() * domains.length)];

	return email;
}

describe('auth spec', () => {
	it('passes', () => {
		cy.visit('/');
	});

	it('login is working', () => {
		cy.visit('/');

		cy.get('[data-testid=login-card-email]').type('test@test.com');

		cy.get('[data-testid=login-card-password]').type('12345678');

		cy.get('[data-testid=login-card-button]').click();

		cy.location('pathname').should('eq', '/feed');
	});

	it('signup is working', () => {
		cy.visit('/');

		const randomEmail = generateRandomEmail();

		cy.get('[data-testid=login-card-change-tab]').click();

		cy.get('[data-testid=signup-card-name]').type('Name');
		cy.get('[data-testid=signup-card-lastname]').type('Lastname');

		cy.get('[data-testid=signup-card-email]').type(randomEmail);
		cy.get('[data-testid=signup-card-password]').type('12345678');

		cy.get('[data-testid=signup-card-button]').click();

		cy.location('pathname').should('eq', '/feed');
	});
});
