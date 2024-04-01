import { User } from '@/src/entities/user';

export interface AuthPayload {
	email: string;
	password: string;
	name?: string;
	lastname?: string;
}

export interface JwtTokens {
	accessToken: string;
	refreshToken: string;
}

export interface AuthResponse extends JwtTokens {
	user: User;
}
