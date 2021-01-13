import React, { Component } from "react";
import NavLink from "../navLink/navLink";
import "./navBar.css";

class NavBar extends Component {
  state = {
    navLinks: [
      { id: 0, value: "Home" },
      { id: 1, value: "Plants" },
      { id: 2, value: "Users" },
    ],
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.navLinks.map((navLink) => (
            <NavLink key={navLink.id} value={navLink.value} />
          ))}
        </ul>
      </div>
    );
  }
}

export default NavBar;
