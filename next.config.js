/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
	output: 'export',
	basePath: "/out",
	images: {
		unoptimized: true
	}
}

module.exports = nextConfig
