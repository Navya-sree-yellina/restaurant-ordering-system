/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
  },
}