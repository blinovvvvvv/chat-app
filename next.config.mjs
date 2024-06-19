/** @type {import('next').NextConfig} */
const nextConfig = {
	optimizeFonts: true,
	reactStrictMode: true,
	cleanDistDir: true,
	compiler: {
		/** remove data-testid props */
		reactRemoveProperties: true,
	},
	eslint: {
		dirs: ['src', 'app'],
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '4000',
				pathname: '/**',
			},
		],
	},
};

export default nextConfig;
