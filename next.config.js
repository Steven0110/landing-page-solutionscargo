/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
	output: 'export',
	reactStrictMode: true,
	basePath: "/landing-page-solutionscargo",
	assetPrefix: "/landing-page-solutionscargo/",
	images: {
		unoptimized: true
	}
}

module.exports = nextConfig
