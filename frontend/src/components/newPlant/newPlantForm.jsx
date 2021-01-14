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
    this.state.plant[name] = value;
    this.setState(this.state);
  }

  handleFileChange = (event) => {
    this.state.file = event.target.files[0];
    this.state.plant.image = event.target.files[0].name;
    this.setState(this.state);
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
        console.log(res.statusText);
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
