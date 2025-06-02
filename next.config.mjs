/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [],
    domains: [],
  },
  basePath: '/KUKA-HMI-Dashboard',
  assetPrefix: '/KUKA-HMI-Dashboard/',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

export default nextConfig
