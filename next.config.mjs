/** @type {import("next").NextConfig} */
const nextConfig = {
  eslint: {
    // Do not fail production builds on ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
