import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // Prevent Next from using ~/package-lock.json as the workspace root
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
