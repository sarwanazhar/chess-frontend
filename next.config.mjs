/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
      domains: [
        "img.clerk.com",
        "utfs.io"
      ]
    } // Set to false to disable Strict Mode
  };
  
  export default nextConfig;
  