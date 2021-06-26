import React from "react";
import "./app.less";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import store from "@/redux/store";
import zhCN from "antd/lib/locale/zh_CN";

import { getRouteData } from "@/routes";
import ErrorBoundary from "@/components/ErrorBoundary";

import "@/assets/less/normalize.less";
import "@/assets/less/index.less";

if (__DEV__) {
  console.info("[当前环境] 开发环境");
}
if (__PROD__) {
  console.info("[当前环境] 线上环境");
}

const routes = getRouteData();

function App() {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <Router>
          <div>
            <Switch>
              {routes.map((route) => (
                <Route
                  exact
                  path={route.path}
                  key={route.path}
                  render={(props) => {
                    const Comp = route.component;
                    const Layout = route.layout;
                    if (!Layout) {
                      return (
                        <ErrorBoundary>
                          <Comp {...props} />
                        </ErrorBoundary>
                      );
                    }
                    return (
                      <ErrorBoundary>
                        <Layout {...props}>
                          <Comp {...props} />
                        </Layout>
                      </ErrorBoundary>
                    );
                  }}
                />
              ))}
            </Switch>
          </div>
        </Router>
      </ConfigProvider>
    </Provider>
  );
}

export default App;
