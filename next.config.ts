/** @type {import('next').NextConfig} */

const env: string = process.env.NODE_ENV;

let nextConfig;
if (env === "development") {
	nextConfig = {};
} else {
	nextConfig = {
		output: "export",
		// basePath: "/nextjs-github-pages",
		poweredByHeader: false,
		experimental: {
			useLightningcss: true,
		},
	};
}

export default nextConfig;
