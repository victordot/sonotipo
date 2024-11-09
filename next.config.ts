import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;


// next.config.js
module.exports = {
  output: 'export', // Habilita la exportación estática
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes
  },
}
