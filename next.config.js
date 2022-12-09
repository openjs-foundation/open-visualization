/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'images.unsplash.com',
      'open-visualization.cdn.prismic.io',
      'images.prismic.io',
    ],
  },
};

module.exports = nextConfig;
