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
    "/mindMap": {
      module: lazyLoad(() =>
        import(/* webpackChunkName: "error" */ "@/views/mindmap")
      ),
      title: "脑图",
    },
    "/counter": {
      module: Counter,
      title: "计算器",
    },
    "/error": {
      module: lazyLoad(() =>
        import(/* webpackChunkName: "error" */ "@/views/error")
      ),
      title: "报错",
    },
    "/imgdemo": {
      module: lazyLoad(() =>
        import(/* webpackChunkName: "error" */ "@/views/imgdemo")
      ),
      title: "图片",
    },
    "/cssdemo": {
      module: lazyLoad(() =>
        import(/* webpackChunkName: "error" */ "@/views/cssdemo")
      ),
      title: "CSSModule",
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
