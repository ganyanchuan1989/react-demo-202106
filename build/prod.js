const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const config = require("./webpack.prod.conf");
const gzipSize = require("gzip-size");
const { Table } = require("console-table-printer");

const { dist, analyze } = require("./config");

if (analyze) {
  // 分析
  config.plugins.push(new BundleAnalyzerPlugin());
}

webpack(config, (err, stats) => {
  const { compilation } = stats;
  const { assets } = compilation;
  reports(assets);
  // let report = "resource name \t\t\t\t\t origin size \t\t\t gzip size \n";
  // let reports = [];
  // for (const [k, v] of Object.entries(assets)) {
  //   const originSize = (v.size() / 1024).toFixed(2);
  //   const gSize = (gzipSize.sync(v.buffer.toString()) / 1024).toFixed(2);
  //   report += `${k} \t\t\t\t\t ${originSize}k \t\t\t ${gSize}k \n`;
  //   reports.push({ name: k, originSize, gzipSize: gSize });
  // }
  // // save build info to file
  // // console.log(report);
  // console.table(reports, []);
  // fs.writeFileSync(path.join(dist, "__build_info__"), report);
});

function reports(assets) {
  const p = new Table({
    columns: [
      { name: "index", alignment: "left" },
      { name: "name", alignment: "left", title: "rsource name" },
      { name: "originSize", title: "origin size(k)" },
      { name: "gSize", title: "gzip size(k)" },
    ],
  });

  let index = 1;
  let originSizeTotal = 0;
  let gSizeTotal = 0;
  for (const [k, v] of Object.entries(assets)) {
    const gSize = gzipSize.sync(v.buffer.toString());
    const extname = path.extname(k);
    if (extname !== ".map") {
      originSizeTotal += v.size();
      gSizeTotal += gSize;
    }
    p.addRow(
      {
        index,
        name: k,
        originSize: (v.size() / 1024).toFixed(2),
        gSize: (gSize / 1024).toFixed(2),
      },
      { color: v.size() / 1024 > 1024 ? "red" : "green" }
    );
    index++;
  }
  p.addRow({});
  p.addRow({
    index: "total",
    name: "total(filter map file)",
    originSize: (originSizeTotal / 1024).toFixed(2),
    gSize: (gSizeTotal / 1024).toFixed(2),
  });
  index++;

  p.printTable();
}
