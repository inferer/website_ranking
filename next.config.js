/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: '/api/web/:path*',
        destination: `http://49.234.51.249:8792/api/web/:path*`
      },
    ]
  },
}

// http://49.234.51.249:8792

module.exports = nextConfig
