/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
module.exports = {
    distDir: 'build',
    output: 'export',
    eslint: {
      ignoreDuringBuilds: true,
    },
}