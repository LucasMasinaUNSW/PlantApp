import React, { Component } from "react";
import Button from "../button/button";
import "./newPlantForm.css";

class NewPlantForm extends Component {
  state = {
    plant: {
      name: "",
      image: "",
    },
    onSubmit: this.props.onSubmit,
  };

  validateInput = () => {};

  render() {
    return (
      <div>
        <input type="text" value="Name" />
        <input type="text" value="Image" />
        <Button
          text="Add Plant"
          handleClick={() => this.state.onSubmit(this.state.plant)}
        />
      </div>
    );
  }
}

export default NewPlantForm;
