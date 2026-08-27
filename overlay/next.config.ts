import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  devIndicators: false,
  experimental: {
    cpus: 1,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
