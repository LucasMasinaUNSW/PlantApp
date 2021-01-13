import React, { Component } from "react";
import "./navLink.css";

class NavLink extends Component {
  state = {
    text: this.props.value,
  };
  render() {
    return <li>{this.state.text}</li>;
  }
}

export default NavLink;
