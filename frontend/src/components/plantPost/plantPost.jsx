import React, { Component } from "react";
import axios from "axios";
import "./plantPost.css";

class PlantPost extends Component {
  state = {
    name: this.props.name,
    location: this.props.location,
    image: this.props.image,
  };

  fetchImage = () => {
    const url = `http://localhost:8000/plants/download/${this.state.image}`;
    axios.get(url, { responseType: "blob" }).then((res) => {
      console.log(res);
      const file = new File([res.data], { type: "image/jpeg" });
      const imageURL = URL.createObjectURL(file);
      console.log(`imageURL: ${imageURL}`);
      return imageURL;
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.state.location}</h2>
        <img
          src={this.fetchImage()}
          alt={this.state.image}
          onLoad={() => {
            URL.revokeObjectURL(this.src); // check if works
          }}
        />
      </div>
    );
  }
}

export default PlantPost;
