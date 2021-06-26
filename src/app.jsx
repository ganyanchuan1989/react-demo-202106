import React from "react";
import "./app.less";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import store from "@/redux/store";
import zhCN from "antd/lib/locale/zh_CN";
import BasicLayout from "./layouts/BasicLayout";
import "@/assets/less/normalize.less";
import "@/assets/less/index.less";

if (__DEV__) {
  console.info("[当前环境] 开发环境");
}
if (__PROD__) {
  console.info("[当前环境] 线上环境");
}

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <Router>
          <div>
            <Route path="/" component={BasicLayout} />
          </div>
        </Router>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
