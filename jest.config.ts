/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
	dir: './',
});

const config: Config = {
	clearMocks: true,
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
	},
	setupFilesAfterEnv: ['<rootDir>/config/jest/jest.setup.ts'],
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
};

export default createJestConfig(config);
