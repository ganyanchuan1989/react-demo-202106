import { combineReducers } from "redux";
import userReducer from "@/redux/reducers/user";
import counterReducer from "@/redux/reducers/counter";

const syncReducers = {
  userData: userReducer,
  counter: counterReducer,
};

export function createRootReducer() {
  return combineReducers({
    ...syncReducers,
  });
}
