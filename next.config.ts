import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Dev only: let devices on the local network (e.g. a phone at 192.168.1.x)
  // load dev assets so the page hydrates. No effect on production builds.
  allowedDevOrigins: ['192.168.1.*'],
  // The production .vercel.app alias serves the same site; send it to the canonical
  // domain, keeping path and query. Matches that exact host only, so the main domain
  // and preview deployment URLs are unaffected.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'siracusa-psicologo.vercel.app' }],
        destination: 'https://www.estebansiracusa.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
