/** @type {import('next').NextConfig} */

console.log(process.env.NODE_ENV)

const isDev = process.env.NODE_ENV === 'development'
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    scrollRestoration: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // destination: `http://49.234.51.249:8792/api/:path*`
        destination: isDev ? `http://49.234.51.249:8792/api/:path*` : `https://api7.inferer.xyz/api/:path*`
      },
      {
        source: '/plugin/:path*',
        destination: `http://49.234.51.249:8792/plugin/:path*`
        // destination: isDev ? `http://49.234.51.249:8792/plugin/:path*` : `https://api7.inferer.xyz/plugin/:path*`
      },
    ]
  },
}

// http://49.234.51.249:8792

module.exports = nextConfig
