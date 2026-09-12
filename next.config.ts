import type { NextConfig } from "next";

/**
 * Production security headers applied to every route.
 *
 * Note on Content-Security-Policy: a CSP is intentionally omitted here. This app
 * relies on Next.js inline hydration/bootstrap scripts and inline JSON-LD
 * (`<script type="application/ld+json">`), plus Vercel's edge runtime for dynamic
 * OG/icon generation. A correct, non-breaking CSP would require per-request nonces
 * wired through those inline scripts; a static policy cannot be guaranteed safe, so
 * none is added rather than risk breaking the site.
 */
const securityHeaders = [
  {
    key: "X-Frame-Options",
    value: "DENY",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
