module.exports = {
  swcMinify: true,
  future: { webpack5: true },
  webpack: (config) => {
    config.resolve.fallback = { fs: false, module: false };

    return config;
  },
};
