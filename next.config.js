/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
	output: 'export',
	basePath: '/landing-page-solutionscargo',
	reactStrictMode: true,
	images: {
		unoptimized: true
	}
}

module.exports = nextConfig
