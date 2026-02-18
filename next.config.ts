/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // <--- ESTO ES LA CLAVE
  images: {
    unoptimized: true, // Necesario para que las imágenes funcionen en Cloudflare
  },
};

export default nextConfig;