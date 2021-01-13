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

  handleChange = this.handleChange.bind(this);

  validateInput = () => {};

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.state.plant[name] = value;
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <label>
          Name
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Image
          <input
            name="image"
            type="text"
            value={this.state.image}
            onChange={this.handleChange}
          />
        </label>
        <Button
          text="Add Plant"
          handleClick={() => this.state.onSubmit(this.state.plant)}
        />
      </div>
    );
  }
}

export default NewPlantForm;
