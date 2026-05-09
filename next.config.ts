import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  poweredByHeader: false,
  trailingSlash: true,
  typedRoutes: true,
  experimental: {
    inlineCss: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
