import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { hot } from "react-hot-loader/root";
import App from "./app";
import store from "./redux/store";

// const HotApp = hot(App);

// const App = () => <div>Hello Worldssss!</div>;

const HotApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

hot(HotApp);

ReactDOM.render(<HotApp />, document.getElementById("root"));
