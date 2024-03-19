export interface AuthPayload {
	email: string;
	password: string;
	name?: string;
	surname?: string;
}

export interface JwtTokens {
	accessToken: string;
	refreshToken: string;
}

export interface AuthResponse extends JwtTokens {
	user: any;
}
