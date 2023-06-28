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
      {
        source: '/plugin/:path*',
        destination: `http://49.234.51.249:8792/plugin/:path*`
      },
    ]
  },
}

// http://49.234.51.249:8792

module.exports = nextConfig
