/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  webpack: (config, { dev, isServer }) => {
    // Enable fast refresh in development
    if (dev && !isServer) {
      config.optimization.moduleIds = 'named'
    }
    return config
  },
}

module.exports = nextConfig 