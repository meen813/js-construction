import type { NextConfig } from "next";

/** One year, the max age browsers and CDNs honour for immutable assets. */
const IMMUTABLE_MAX_AGE_SECONDS = 31536000;

/** 30 days. Optimised images are content-addressed, so re-deriving them hourly was waste. */
const IMAGE_CACHE_TTL_SECONDS = 2592000;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: IMAGE_CACHE_TTL_SECONDS,
    qualities: [25, 50, 75, 85, 90, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'post-images-jsconstruction.s3.us-west-1.amazonaws.com',
        pathname: '**',
      },
    ],
  },
  async redirects() {
    return [
      // The mall entrance remodel was retired from the portfolio; /projects/4 was
      // already in the submitted sitemap, so send it to the list instead of 404ing.
      {
        source: '/projects/4',
        destination: '/projects',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        // Hero media is versioned by filename, so a repeat visit should never
        // re-fetch it. Any re-encode ships under a new name.
        source: '/video/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: `public, max-age=${IMMUTABLE_MAX_AGE_SECONDS}, immutable`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;

