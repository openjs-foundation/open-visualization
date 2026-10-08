import { createSecureHeaders } from 'next-secure-headers';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'open-visualization.cdn.prismic.io',
      },
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/summits/zurich-summit-2026',
        destination: '/summit-archives/zurich-summit-2026/index.html',
      },
      {
        source: '/summits/seattle-summit-2025',
        destination: '/summit-archives/seattle-summit-2025/index.html',
      },
      {
        source: '/summits/london-summit-2024',
        destination: '/summit-archives/london-summit-2024/index.html',
      },
      {
        source: '/summits/new-york-summit-2023',
        destination: '/summit-archives/new-york-summit-2023/index.html',
      },
      {
        source: '/summits/madrid-summit-2022',
        destination: '/summit-archives/madrid-summit-2022/index.html',
      },
    ];
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: createSecureHeaders({
          // HSTS Preload: https://hstspreload.org/
          forceHTTPSRedirect: [
            true,
            { maxAge: 63072000, includeSubDomains: true, preload: true },
          ],
        }),
      },
    ];
  },

  // Temporary
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
