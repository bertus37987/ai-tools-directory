/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/ai-tools-directory' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ai-tools-directory/' : '',
  images: {
    unoptimized: true
  },
  experimental: {
    appDir: true
  },
  // Optimize for GitHub Pages
  distDir: 'out'
}

module.exports = nextConfig