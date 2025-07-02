import type { NextConfig } from "next";
import '@/app/_lib/env'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "avatars.githubusercontent.com",
      }
    ]
  }
};

export default nextConfig;
