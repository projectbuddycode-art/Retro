/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.projectbuddy.co.in' }],
        destination: 'https://projectbuddy.co.in/:path*',
        permanent: true,
      },
      {
        source: '/products/proxima',
        destination: 'https://projectbuddy.co.in/products/proxima-ai',
        permanent: true,
      },
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
};

export default nextConfig;
