import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubActions ? '/My-laptop' : '';

const nextConfig: NextConfig = {
  output: isGithubActions ? 'export' : undefined,
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;