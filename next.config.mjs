/** @type {import('next').NextConfig} */
const nextConfig = {
	optimizeFonts: true,
	reactStrictMode: true,
	cleanDistDir: true,
	publicRuntimeConfig: {
		staticFolder: '/static',
	},
};

export default nextConfig;
