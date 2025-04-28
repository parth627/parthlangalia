/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Required for static HTML export (GitHub Pages)
    distDir: './frontend/.next',
    images: {
      unoptimized: true, // Disable Next.js image optimization (static sites need this)
    },
    // Optional: Uncomment if deploying to `user.github.io/repo-name`
    // basePath: '/repo-name',
  };
  
  module.exports = nextConfig;
