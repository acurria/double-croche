/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        scrollRestoration: true
    },
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ['cdn.sanity.io'],
        unoptimized: true
    }
}

module.exports = nextConfig
