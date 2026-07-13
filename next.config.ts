import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Serve pre-optimized public/images directly. Avoids Vercel Image
  // Optimization 402 (OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED) on free tier.
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    qualities: [60, 65, 70, 75],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
