/** @type {import('next').NextConfig} */

const env: string = process.env.NODE_ENV;

let nextConfig = {};
if (env === "production") {
	nextConfig = {
		output: "export",
		poweredByHeader: false,
		images: {
			loader: "akamai",
			path: "https://srcalo.github.io/",
		},
		experimental: {
			useLightningcss: true,
		},
	};
}

export default nextConfig;
