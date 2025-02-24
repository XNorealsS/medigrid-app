/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost'], // Add your backend domain here
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '5000',
          pathname: '/uploads/**',
        },
      ],
    },
  }
  
  module.exports = nextConfig