const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/contracts',
  reactStrictMode: false,
  swcMinify: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig
