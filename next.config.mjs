/** @type {import('next').NextConfig} */
const nextConfig = {
	optimizeFonts: true,
	reactStrictMode: true,
	cleanDistDir: true,
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '4000',
				pathname: '/uploads/**',
			},
		],
	},
};

export default nextConfig;
