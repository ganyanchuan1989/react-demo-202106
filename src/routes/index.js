import lazyLoad from "../layouts/lazyLoad";
// import BasicLayout from "../layouts/BasicLayout";
// import { checkLogin, checkRole } from '../utils/userAuth';

export const getRouteData = () => {
  const routerConfig = {
    // 首页
    "/": {
      module: lazyLoad(() => import("@/views")),
    },
    "*": { module: lazyLoad(() => import("@/components/404")) },
  };

  const routeData = [];
  for (const [k, v] of Object.entries(routerConfig)) {
    routeData.push({
      path: k,
      component: v.module,
      onEnter: v.onEnter,
      layout: v.layout,
    });
    // if (menuData.includes(k)) {
    // }
  }

  return routeData;
};
