import React, { memo } from "react";
import { Breadcrumb, Layout, Menu } from "antd";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Switch, Route, Link } from "react-router-dom";

import { getRouteData } from "@/routes";

const { Header, Content, Sider } = Layout;

const routes = getRouteData();

const BasicLayout = () => (
  <Layout>
    <Header className="header">
      <div className="logo" />
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu theme="dark">
          {routes.map((item) => {
            if (item.path === "/") {
              return null;
            }
            return (
              <Menu.Item key={item.path}>
                <Link to={item.path}>{item.title || item.path}</Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout style={{ padding: "0 24px 24px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <div>
            <Switch>
              {routes.map((route) => (
                <Route
                  exact
                  path={route.path}
                  key={route.path}
                  render={(props) => {
                    const Comp = route.component;
                    return (
                      <ErrorBoundary>
                        <Comp {...props} />
                      </ErrorBoundary>
                    );
                  }}
                />
              ))}
            </Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default memo(BasicLayout);
