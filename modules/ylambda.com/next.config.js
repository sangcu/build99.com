/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const path = require('path')

const nextConfig = {
  i18n,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ]
  },
  output: { path: path.resolve(__dirname, 'static') },
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
}

module.exports = nextConfig
