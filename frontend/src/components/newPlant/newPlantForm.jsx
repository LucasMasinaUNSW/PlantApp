import React, { Component } from "react";
import Button from "../button/button";
import axios from "axios";
import "./newPlantForm.css";

class NewPlantForm extends Component {
  state = {
    plant: {
      name: "",
      location: "",
      image: "",
    },
    file: null,
    onSubmit: this.props.onSubmit,
  };

  handleChange = this.handleChange.bind(this);

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    let tempState = this.state;
    tempState.plant[name] = value;
    this.setState(tempState);
  }

  handleFileChange = (event) => {
    let tempState = this.state;
    tempState.file = event.target.files[0];
    tempState.plant.image = event.target.files[0].name;
    this.setState(tempState);
  };

  uploadFile = () => {
    const data = new FormData();
    data.append("file", this.state.file);
    axios
      .post("http://localhost:8000/plants/upload", data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.log("file upload " + res.statusText);
      });
  };

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
          Location
          <input
            name="location"
            type="text"
            value={this.state.location}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Upload file:
          <input name="file" type="file" onChange={this.handleFileChange} />
        </label>
        <Button
          text="Add Plant"
          handleClick={() => {
            this.uploadFile();
            this.state.onSubmit(this.state.plant);
          }}
        />
      </div>
    );
  }
}

export default NewPlantForm;
