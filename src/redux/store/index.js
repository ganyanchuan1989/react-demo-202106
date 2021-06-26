import { applyMiddleware, compose, createStore } from "redux";
import { createRootReducer } from "@/redux/reducers";
import middlewares from "./middlewares";

// ======================================================
// 实例化 Store
// ======================================================
const store = createStore(
  createRootReducer(),
  {}, // 前后端同构（服务端渲染）数据同步
  compose(applyMiddleware(...middlewares))
);
export default store;
