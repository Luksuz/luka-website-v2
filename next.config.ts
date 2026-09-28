import type { NextConfig } from "next";

// Fully static: every page is plain HTML in out/, served by Netlify.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: false,
  images: { unoptimized: true },
  poweredByHeader: false,
};

export default nextConfig;
