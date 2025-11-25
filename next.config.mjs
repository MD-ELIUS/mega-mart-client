/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",  // allow ALL websites
      },
      {
        protocol: "http",
        hostname: "**",   // optional (if http image exists)
      },
    ],
  },
};
export default nextConfig;

