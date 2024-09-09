/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    LOGIN_STATUS_COOKIE: process.env.PASSWORD_COOKIE
  }
};

export default nextConfig;
