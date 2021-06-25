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
    filename: "[name].[chunkhash:6].js",
    chunkFilename: "[name].[chunkhash:6].js",
    publicPath: PUBLIC_PATH,
  },
  resolve: {
    modules: [src, "node_modules"],
    extensions: [".js", ".jsx"],
    alias: {
      // ================================
      // 自定义路径别名
      // ================================
      ASSET: path.join(src, "assets"),
      COMPONENT: path.join(src, "components"),
      ACTION: path.join(src, "redux/actions"),
      REDUCER: path.join(src, "redux/reducers"),
      STORE: path.join(src, "redux/store"),
      ROUTE: path.join(src, "routes"),
      SERVICE: path.join(src, "services"),
      UTIL: path.join(src, "utils"),
      HOC: path.join(src, "utils/HoC"),
      MIXIN: path.join(src, "utils/mixins"),
      VIEW: path.join(src, "views"),
      CONFIG: path.join(build, "config"),
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
                localIdentName: "[name]-[path]_[local]_[hash:base64:5]",
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
    ],
  },
  plugins: [
    new ESLintPlugin({ extensions: ["js", "jsx"] }),
    new webpack.DefinePlugin({
      __DEV__: env === "development",
      __PROD__: env === "production",
    }),
    new HappyPack({
      id: "babel", // 上面loader?后面指定的id
      loaders: ["babel-loader?cacheDirectory"], // 实际匹配处理的loader
      // 如何处理.js文件，和rules里的配置相同
      threadPool: happyThreadPool,
      // cache: true // 已被弃用
      verbose: true,
    }),

    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "../src/index.html"),
      chunksSortMode: "none",
    }),
    // moment 动态加载locale
    // new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn|en/),
  ],
};
