const HtmlWebpackPlugin = require("html-webpack-plugin"); // installed via npm
const webpack = require("webpack"); // to access built-in plugins
const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "development",
  entry: [
    "webpack-hot-middleware/client?reload=true",
    "react-hot-loader/patch",
    "./src/index.jsx",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "my-first-webpack.bundle.js",
  },
  // devServer: {
  //   hot: true,
  //   contentBase: path.join(__dirname, "static"),
  //   compress: true,
  //   port: 9000,
  // },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: "babel-loader" },
      {
        test: /\.less$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            // options: {
            //   lessOptions: {
            //     strictMath: true,
            //   },
            // },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new ESLintPlugin({}),
  ],
};
