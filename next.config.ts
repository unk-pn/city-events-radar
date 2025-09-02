import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["s1.ticketm.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s1.ticketm.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.ticketm.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
