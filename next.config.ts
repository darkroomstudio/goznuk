import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: { ppr: true, typedEnv: true },
  images: {
    domains: ['img.clerk.com'],
  },
}

export default nextConfig
