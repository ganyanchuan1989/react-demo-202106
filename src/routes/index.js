import Main from "@/views/main";
import Counter from "@/views/counter";
import lazyLoad from "@/components/lazyLoad";

/**
 * router 有加载有同步加载和异步加载
 * 同步加载优点HMR局部刷新，缺点参与主程序打包，会导致包变大。
 */
export const getRouteData = () => {
  const routerConfig = {
    "/": {
      module: lazyLoad(() => import(/* webpackChunkName: "home" */ "@/views")),
    },
    "/login": {
      module: lazyLoad(() =>
        import(/* webpackChunkName: "login" */ "@/views/login")
      ), // 全局刷新：丢失状态
    },
    "/main": {
      module: Main,
    },
    "/counter": {
      module: Counter,
    },
    "/error": {
      module: lazyLoad(() =>
        import(/* webpackChunkName: "error" */ "@/views/error")
      ),
    },
    "/imgdemo": {
      module: lazyLoad(() =>
        import(/* webpackChunkName: "error" */ "@/views/imgdemo")
      ),
    },
    "*": {
      module: lazyLoad(() =>
        import(/* webpackChunkName: "404" */ "@/components/404")
      ),
    },
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
