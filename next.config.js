/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/parthlangalia' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/parthlangalia/' : '',
  distDir: '../out', // Use a relative path to bring 'out' to root
  trailingSlash: true,
  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;