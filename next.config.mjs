/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  transpilePackages: ['three'],
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
