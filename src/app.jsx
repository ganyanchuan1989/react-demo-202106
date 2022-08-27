import React from "react";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { HashRouter as Router } from "react-router-dom";
import store from "@/redux/store";
import zhCN from "antd/lib/locale/zh_CN";
import BasicLayout from "@/components/BasicLayout";

import "./app.less";
import "@/assets/less/global.less";

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
          <BasicLayout />
        </Router>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
