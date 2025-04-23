// // // import type { NextConfig } from "next";

// // // const nextConfig: NextConfig = {
// // //   /* config options here */
// // // };

// // // export default nextConfig;


// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   images: {
// //     remotePatterns: [
// //       {
// //         protocol: "http",
// //         hostname: "localhost",
// //         port: "8000",
// //         pathname: "/images/**",
// //       },
// //     ],
// //   },
// // };

// // export default nextConfig;


// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ['localhost'], // For simpler image usage like <Image src="http://localhost/...">
//     remotePatterns: [
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//         port: '8000',
//         pathname: '/images/**',
//       },
//     ],
//   },
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: /\.[jt]sx?$/,
//       use: ['@svgr/webpack'],
//     });
//     return config;
//   },
// };

// module.exports = nextConfig;
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'], // ✅ Allow loading images from localhost
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;