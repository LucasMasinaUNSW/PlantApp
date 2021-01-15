import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavLink from "../navLink/navLink";
import Logo from "../logo/logo";
import "./navBar.css";

class NavBar extends Component {
  state = {
    navLinks: [
      { id: 0, value: "Home", path: "/" },
      { id: 1, value: "Plants", path: "/plants" },
      { id: 2, value: "User", path: "/user" },
    ],
  };
  render() {
    return (
      <div>
        <nav>
          <ul>
            <Link to="/">
              <Logo key="logo" />
            </Link>
            {this.state.navLinks.map((navLink) => (
              <Link key={navLink.id} to={navLink.path}>
                <NavLink value={navLink.value} />
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
