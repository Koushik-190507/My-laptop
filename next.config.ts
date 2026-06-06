import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/My-laptop',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;