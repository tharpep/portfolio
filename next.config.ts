import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Short link for the homelab, which lives as a project page.
    return [{ source: '/homelab', destination: '/projects/homelab', permanent: false }];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
