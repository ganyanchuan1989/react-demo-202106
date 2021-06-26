import Main from "@/views/main";
import lazyLoad from "../layouts/lazyLoad";
// import BasicLayout from "../layouts/BasicLayout";
// import { checkLogin, checkRole } from '../utils/userAuth';

/**
 * router 有加载有同步加载和异步加载
 * 同步加载优点HRM局部刷新，缺点参与主程序打包，会导致包变大。
 */
export const getRouteData = () => {
  const routerConfig = {
    "/": {
      module: lazyLoad(() => import("@/views")),
    },
    "/login": {
      module: lazyLoad(() => import("@/views/login")), // 全局刷新：丢失状态
    },
    "/main": {
      module: Main,
    },
    "*": { module: lazyLoad(() => import("@/components/404")) },
  };

  const routeData = [];
  for (const [k, v] of Object.entries(routerConfig)) {
    routeData.push({
      path: k,
      component: v.module,
      layout: v.layout,
    });
  }

  return routeData;
};
