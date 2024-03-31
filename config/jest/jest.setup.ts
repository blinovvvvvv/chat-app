import '@/styles/globals.scss';
import '@testing-library/jest-dom';

process.env.NEXT_PUBLIC_UPLOADS_URL = 'http://localhost:4000/uploads';

// definition for window.matchMedia
Object.defineProperty(window, 'matchMedia', {
	writable: true,
	value: jest.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addListener: jest.fn(), // Deprecated
		removeListener: jest.fn(), // Deprecated
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
});
