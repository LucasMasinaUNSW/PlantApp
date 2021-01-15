import React, { Component } from "react";
import logo from "../../images/plant_logo.png";
import "./logo.css";

class Logo extends Component {
  render() {
    return (
      <li className="logo">
        <img src={logo} alt="" />
      </li>
    );
  }
}

export default Logo;
