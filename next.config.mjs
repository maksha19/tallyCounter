/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: process.env.NODE_ENV === "development"? '': "/tallyCounter",
    output: "export",
    reactStrictMode: true,
};

export default nextConfig;
