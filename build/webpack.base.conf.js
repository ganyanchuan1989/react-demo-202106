const path = require("path");
const webpack = require("webpack");
const os = require("os");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HappyPack = require("happypack");
const ESLintPlugin = require("eslint-webpack-plugin");

const { src, env, build, dist, PUBLIC_PATH } = require("./config");

var happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
  entry: {
    app: ["@babel/polyfill", path.join(src, "index.jsx")],
  },
  devtool: "source-map",
  output: {
    path: path.join(dist),
    filename: "js/[name].[chunkhash:6].js",
    chunkFilename: "js/[name].[chunkhash:6].js",
    assetModuleFilename: "imgs/[chunkhash:6][ext][query]",
    publicPath: PUBLIC_PATH,
  },
  resolve: {
    modules: [src, "node_modules"],
    extensions: [".js", ".jsx"],
    alias: {
      "@": src,
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "happypack/loader?id=babel",
        include: src,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.less$/,
        include: [/src/],
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[name]_[local]_[hash:base64:10]",
              },
            },
          },
          { loader: "postcss-loader" },
          { loader: "less-loader" },
        ],
      },
      {
        test: /\.less$/,
        include: [/node_modules/],
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              // modules: true,
              // localIndexName:"[name]__[local]___[hash:base64:5]"
            },
          },
          {
            loader: "less-loader",
            options: { lessOptions: { javascriptEnabled: true } }, // modifyVars: antdTheme
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10KB ???????????? base64
          },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?v=[\d\.]+)?$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 10KB ???????????? base64
          },
        },
      },
      {
        test: /\.(svg)$/,
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new ESLintPlugin({ extensions: ["js", "jsx"] }),
    new webpack.DefinePlugin({
      __DEV__: env === "development",
      __PROD__: env === "production",
    }),
    new HappyPack({
      id: "babel", // ??????loader????????????????id
      loaders: ["babel-loader?cacheDirectory"], // ?????????????????????loader
      // ????????????.js????????????rules??????????????????
      threadPool: happyThreadPool,
      // cache: true // ????????????
      verbose: true,
    }),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../src/index.html"),
      chunksSortMode: "none",
    }),
    // moment ????????????locale
    // new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|en/),
  ],
};
