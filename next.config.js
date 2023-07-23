const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
//   reactStrictMode: true,
  images: {
    domains: ['example.com'],
  },
}

module.exports = {
  ...nextConfig,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}
