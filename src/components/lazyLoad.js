import React from "react";
import { Spin } from "antd";
import Bundle from "@/components/Bundle";

const Loading = () => (
  <div style={{ textAlign: "center", fontSize: "large", padding: "20px" }}>
    <Spin /> Loading...
  </div>
);

const lazyLoad = (loadComponent) => (props) =>
  (
    <Bundle load={loadComponent}>
      {(Comp) => (Comp ? <Comp {...props} /> : <Loading />)}
    </Bundle>
  );

export default lazyLoad;
