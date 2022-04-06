/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  watchers: {
    webpack: {
      poll: true
    }
  },
  experimental: {
    optimizeFonts: true,
  },
  images: {
   domains: ['images.microcms-assets.io'],
  },
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

// module.exports = nextConfig
