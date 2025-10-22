import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      root: "/Users/a/bulwark/site"
    }
  },
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
