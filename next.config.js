/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["react-icons"],
  },
  images:{
    domains:["external-content.duckduckgo.com"]
  }
};

module.exports = nextConfig;
