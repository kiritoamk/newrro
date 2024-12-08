const { withNextVideo } = require('next-video/process');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
};

// Chain the withNextVideo and withBundleAnalyzer
module.exports = withBundleAnalyzer(withNextVideo(nextConfig, { folder: 'public' }));
