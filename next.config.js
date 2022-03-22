/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  watchers: {
    webpack: {
      poll: true
    }
  },
  images: {
   domains: ['images.microcms-assets.io'],
  },
}

module.exports = nextConfig
