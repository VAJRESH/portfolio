const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      scss: path.resolve(__dirname, "styles"),
    };

    return config;
  },
  sassOptions: {
    includePaths: [path.resolve(__dirname, "styles")],
    prependData: `@import "~scss/variables.scss";`,
  },
};
