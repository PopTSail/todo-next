
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/todo-next' : '',
  assetPrefix: isProd ? '/todo-next/' : '',
};

module.exports = nextConfig;


