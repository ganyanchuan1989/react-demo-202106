const express = require("express");
const webpack = require("webpack");
// favicon = require('express-favicon'),
const config = require("./webpack.dev.conf");
const proxy = require("http-proxy-middleware");
const app = express();

const compiler = webpack(config);

const { staticDir, mockDir, CONTEXT_PATH } = require("./config");

// for highly stable resources
app.use(express.static(staticDir));
app.use(CONTEXT_PATH, express.static(staticDir));
app.use(express.static(mockDir));

// handle fallback for HTML5 history API
// app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
    stats: false,
  })
);

// enable hot-reload and state-preserving
// compilation error display
app.use(require("webpack-hot-middleware")(compiler));

// PROXY
// app.use('/api/*', proxy('http://127.0.0.1:8000/'));

app.listen(9000, "127.0.0.1", function (err) {
  err && console.log(err);
});
