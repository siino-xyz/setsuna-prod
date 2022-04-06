/** @type {import('next').NextConfig} */
const path = require('path');
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
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}



const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);

// module.exports = nextConfig
