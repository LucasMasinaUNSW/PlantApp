import React, { Component } from "react";
import Welcome from "../welcome/welcome";
import "./userPage.css";

class UserPage extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <h1>user</h1>
      </div>
    );
  }
}

export default UserPage;
