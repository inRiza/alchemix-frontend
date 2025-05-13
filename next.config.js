/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: false
  },
  output: 'standalone',
  distDir: '.next',
  trailingSlash: false,
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    });
    return config;
  }
}

module.exports = nextConfig 