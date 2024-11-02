/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
          "cdn.sanity.io"
        ], // Add 'picsum.photos' to the allowed domains
      },
};

export default nextConfig;
