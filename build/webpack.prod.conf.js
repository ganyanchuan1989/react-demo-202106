const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

const config = require("./webpack.base.conf");

const { staticDir, dist } = require("./config");

config.mode = "production";
config.output.filename = "[name].[chunkhash:6].js";
config.output.chunkFilename = "[name].[chunkhash:6].js";

config.optimization = {
  splitChunks: {
    chunks: "async",
    minSize: 20000,
    minRemainingSize: 0,
    minChunks: 1,
    maxAsyncRequests: 30,
    maxInitialRequests: 30,
    enforceSizeThreshold: 50000,
    cacheGroups: {
      defaultVendors: {
        test: /[\\/]node_modules[\\/]/,
        priority: -10,
        reuseExistingChunk: true,
      },
      default: {
        minChunks: 2,
        priority: -20,
        reuseExistingChunk: true,
      },
    },
  },
};

config.plugins.push(
  new ProgressBarPlugin(),
  new CleanWebpackPlugin({
    cleanAfterEveryBuildPatterns: ["dist"],
  })
  // new CopyWebpackPlugin({ patterns: [{ from: staticDir, to: dist }] })
);

module.exports = config;
