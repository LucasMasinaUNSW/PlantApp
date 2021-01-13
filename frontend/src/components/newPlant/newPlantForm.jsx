import React, { Component } from "react";
import Button from "../button/button";
import "./newPlantForm.css";

class NewPlantForm extends Component {
  state = {
    name: "",
    image: "",
  };
  render() {
    return (
      <div>
        <input type="text" value="Name" />
        <input type="text" value="Image" />
        <Button text="Add Plant" handleClick={} />
      </div>
    );
  }
}

export default NewPlantForm;
