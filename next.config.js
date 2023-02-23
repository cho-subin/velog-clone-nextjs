/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
}

// ref: https://uiwjs.github.io/react-md-editor/#support-nextjs
const removeImports = require("next-remove-imports")();

module.exports = removeImports(nextConfig)
