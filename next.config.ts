import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://web-assets-buckets.s3.ap-south-1.amazonaws.com/**')],
  },
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
    MEDIA_URL: process.env.MEDIA_URL,
    ACCESS_KEY: process.env.ACCESS_KEY,
    NEXT_PUBLIC_MEDIA_URL: process.env.NEXT_PUBLIC_MEDIA_URL
  }
};

export default nextConfig;
