import React, { Component } from "react";
import logo from "../../images/plant_logo.png";
import "./logo.css";

class Logo extends Component {
  render() {
    return (
      <li>
        <img src={logo} />
      </li>
    );
  }
}

export default Logo;
