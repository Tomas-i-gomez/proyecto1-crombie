import type { NextConfig } from "next";

// next.config.js
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.paredro.com',
        pathname: '/wp-content/uploads/2019/04/**',
      }
    ],
  },
};

export default nextConfig;
