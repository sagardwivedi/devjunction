/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  images:{
    domains:["images.unsplash.com", "plus.unsplash.com", "images.rawpixel.com"]
  }
};

module.exports = nextConfig;
