import thunk from "redux-thunk";

const middlewares = [thunk];

if (__DEV__) {
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  const { createLogger } = require("redux-logger");
  middlewares.push(createLogger());
}

export default middlewares;
