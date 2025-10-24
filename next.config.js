/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/ai-tools-directory' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ai-tools-directory/' : '',
  images: {
    unoptimized: true
  },
  distDir: 'out',
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: false
  }
}

module.exports = nextConfig