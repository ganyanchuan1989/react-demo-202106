import React from "react";
import { Link } from "react-router-dom";

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <Link to="/counter">counter</Link> <br />
        <Link to="/imgdemo">imgdemo</Link>
        <br />
        <Link to="/error">error</Link>
        <br />
        <Link to="/cssdemo">cssdemo</Link>
        <br />
      </div>
    );
  }
}
export default Welcome;
