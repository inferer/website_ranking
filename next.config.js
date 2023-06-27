/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    scrollRestoration: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://49.234.51.249:8792/api/:path*`
      },
    ]
  },
}

// http://49.234.51.249:8792

module.exports = nextConfig
