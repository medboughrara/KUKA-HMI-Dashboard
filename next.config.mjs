/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/KUKA-HMI-Dashboard',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  }
}

export default nextConfig
