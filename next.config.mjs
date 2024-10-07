/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
      maxDuration: 60, // Set this to your desired duration in seconds
    },
  },
};

export default nextConfig;
