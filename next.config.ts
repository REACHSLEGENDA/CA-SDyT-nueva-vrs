import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  // Las páginas con variante Markdown (ver src/proxy.ts) declaran Vary: Accept para
  // que un CDN no entregue el HTML cacheado a un agente que pidió Markdown. `next start`
  // no lo aplica a páginas prerenderizadas; en Netlify el proxy corre antes de la caché
  // y la negociación funciona igual.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'Vary', value: 'Accept' }],
      },
    ];
  },
};

export default withNextIntl(nextConfig);
