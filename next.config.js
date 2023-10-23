/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
    optimizePackageImports: ["react-icons"],
  },
  images:{
    domains:["external-content.duckduckgo.com"]
  }
};

module.exports = nextConfig;
