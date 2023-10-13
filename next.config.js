/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images-na.ssl-images-amazon.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'c7.staticflickr.com',
      },
      {
        protocol: 'https',
        hostname: 'c3.staticflickr.com',
      },
      {
        protocol: 'https',
        hostname: 'c6.staticflickr.com',
      },
      {
        protocol: 'https',
        hostname: 'c2.staticflickr.com',
      },
    ],
  },
}

module.exports = nextConfig
