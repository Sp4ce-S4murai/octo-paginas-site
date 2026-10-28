import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF primeiro (menor), WebP como fallback. Os arquivos de origem
    // em /public já são WebP; os originais JPG ficam em assets-originais/
    // fora do build.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365,
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
