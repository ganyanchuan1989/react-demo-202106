import React from "react";
// import { hot } from "react-hot-loader/root";
import "./app.less";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import Counter from "./Counter";
import Home from "./views/Home";

function App() {
  console.log(">>app");
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/counter">counter</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>Aboutsssss</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

// export default hot(App);

export default App;
