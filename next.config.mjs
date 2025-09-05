/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https", // This was missing!
        hostname: "d3cqgx0nfm61lc.cloudfront.net",
        port: "", // Add this explicitly
        pathname: "/**", // Add this to allow all paths
      },
    ],
  },
};

export default nextConfig;
