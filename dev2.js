// server/bin/server.js 文件代码
const path = require("path");
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

const isDev = true;
const app = express();
const webpackConfig = require("./webpack.config");

const compiler = webpack(webpackConfig);
// 开发环境下才需要启用实时编译和热更新
if (isDev) {
  // 用 webpack-dev-middleware 启动 webpack 编译
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    })
  );

  // 使用 webpack-hot-middleware 支持热更新
  app.use(
    webpackHotMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      noInfo: true,
    })
  );
}

// 错误处理
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.stack || "Service Error");
});

app.listen(8080, () => console.log(`development is listening on port 8888`));
