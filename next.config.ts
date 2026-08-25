// Design reminder: Preserve the reference course site's direct, practical learning experience.
import type { NextConfig } from "next";

const nestApiUrl = (process.env.NEST_API_URL ?? "http://127.0.0.1:4000/api").replace(/\/$/, "");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/learning-api/:path*",
          destination: `${nestApiUrl}/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
