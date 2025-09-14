/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For static exports
  trailingSlash: true, // Recommended for GitHub Pages
  images: {
    unoptimized: true, // Required for static exports
  },
}

module.exports = nextConfig