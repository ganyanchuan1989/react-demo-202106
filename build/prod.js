const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const ProgressPlugin = require("webpack/lib/ProgressPlugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const config = require("./webpack.prod.conf");

const argvs = process.argv.splice(2);

if (argvs && argvs[0] === "analyzer") {
  // 分析
  config.plugins.push(new BundleAnalyzerPlugin());
}

const { dist } = require("./config");

const complier = webpack(config, function (err, stats) {
  // show build info to console
  console.log(stats.toString({ chunks: false, color: true }));

  // save build info to file
  // fs.writeFile(
  //   path.join(dist, "__build_info__"),
  //   stats.toString({ color: false })
  // );
});

// console.log(complier);
// 输出进度信息
// complier.apply(
//   new ProgressPlugin(function (percentage, msg) {
//     console.log(percentage * 100 + "%", msg);
//   })
// );
