import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://www.themealdb.com/images/media/**")],
  },
};

export default nextConfig;
