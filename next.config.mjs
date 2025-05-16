/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Required for Cloudflare Pages
    domains: ['v0.blob.com'], // Add any external image domains you're using
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Ensure output is set to export for static site generation
  output: 'export',
  // Disable image optimization since Cloudflare Pages doesn't support it natively
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  // Ensure trailing slashes are handled correctly
  trailingSlash: false,
}

export default nextConfig
