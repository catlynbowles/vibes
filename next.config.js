/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.stack.imgur.com",
      },
      {
        protocol: "http",
        hostname: "images.wefeelfine.org",
      },
    ],
    minimumCacheTTL: 15000000,
  },
};
