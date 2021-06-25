const webpack = require("webpack");
const path = require("path");
const config = require("./webpack.base.conf");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");

config.mode = "development";

// add hot-reload related code to entry chunk
config.entry.app = [
  ...config.entry.app,
  "webpack-hot-middleware/client?reload=true",
  "react-hot-loader/patch",
  "webpack/hot/only-dev-server",
];

config.plugins.push(
  new ProgressBarPlugin(),
  new webpack.HotModuleReplacementPlugin()
);

module.exports = config;
