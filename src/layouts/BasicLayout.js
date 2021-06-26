import React, { PureComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { getRouteData } from "../routes";
import ErrorBoundary from "./ErrorBoundary";

const routes = getRouteData();
/**
 * 主框架
 */
export default class BasicLayout extends PureComponent {
  render() {
    return (
      <div style={{ minHeight: window.innerHeight }}>
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
    );
  }
}
