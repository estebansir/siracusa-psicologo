import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev only: let devices on the local network (e.g. a phone at 192.168.1.x)
  // load dev assets so the page hydrates. No effect on production builds.
  allowedDevOrigins: ['192.168.1.*'],
};

export default nextConfig;
