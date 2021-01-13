import React, { Component } from "react";
import Welcome from "../welcome/welcome";
import "./plantPage.css";

class PlantPage extends Component {
  render() {
    return (
      <div>
        <Welcome />
        <h1>plants</h1>
      </div>
    );
  }
}

export default PlantPage;
