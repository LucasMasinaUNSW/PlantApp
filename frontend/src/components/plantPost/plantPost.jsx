import React, { Component } from "react";
import axios from "axios";
import "./plantPost.css";

class PlantPost extends Component {
  state = {
    name: this.props.name,
    location: this.props.location,
    image: this.props.image,
    imageURL: "",
  };

  componentDidMount = () => {
    console.log("component mounted");
    const url = `http://localhost:8000/plants/download/${this.state.image}`;
    axios.get(url, { responseType: "blob" }).then((res) => {
      const file = new File([res.data], { type: "image/jpeg" });
      const imageURL = URL.createObjectURL(file);
      let tempState = this.state;
      tempState.imageURL = imageURL;
      console.log("setting state");
      this.setState(tempState);
    });
  };

  render() {
    console.log("imageURL rendered: " + this.state.imageURL);
    console.log("imageFile rendered: " + this.state.imageFile);
    return (
      <li>
        <h1>{this.state.name}</h1>
        <h2>{this.state.location}</h2>
        <img
          src={this.state.imageURL}
          alt={this.state.image}
          //alt={"test"}
          onLoad={() => {
            URL.revokeObjectURL(this.state.imageURL); // removes uneccessary ObjectURL once image is loaded
          }}
        />
      </li>
    );
  }
}

export default PlantPost;
