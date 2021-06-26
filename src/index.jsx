import React from "react";
import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import App from "./app";
// import store from "./redux/store";

import { hot } from "react-hot-loader/root";
// const HotApp = hot(App);

// const App = () => <div>Hello Worldssss!</div>;
const aaa = "aaa";
// const HotApp = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
const HotApp = () => <div>aaa</div>;
hot(HotApp);

ReactDOM.render(<HotApp />, document.getElementById("root"));
