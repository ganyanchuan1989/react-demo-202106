import React from "react";
// import { hot } from "react-hot-loader/root";
import "./app.less";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import BasicLayout from "./layouts/BasicLayout";
import "ASSET/less/normalize.less";
import "ASSET/less/index.less";

if (__DEV__) {
  console.info("[当前环境] 开发环境");
}
if (__PROD__) {
  console.info("[当前环境] 线上环境");
}

function App() {
  return (
    <Router>
      <Route path="/" component={BasicLayout} />
    </Router>
  );
}

export default App;
