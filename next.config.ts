import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => {
    return [
      {
        source: '/blog/guanyin-dan-bai-bai-zheng-que-fang-shi.html',
        destination: '/blog/guanyin-dan-bai-bai-zheng-que-fang-shi',
        permanent: true,
      },
    ];
  },
  rewrites: async () => {
    return [
      {
        source: '/ads.txt',
        destination: '/api/ads-txt',
      },
    ];
  },
};

export default nextConfig;
