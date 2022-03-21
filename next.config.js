/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  watchers: {
    webpack: {
      poll: true
    }
  },
}

module.exports = nextConfig
