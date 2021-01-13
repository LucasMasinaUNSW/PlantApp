import React, { Component } from "react";
import "./plantPost.css";

class PlantPost extends Component {
  state = {
    name: this.props.name,
    image: this.props.image,
  };
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <img src={this.state.image} />
      </div>
    );
  }
}

export default PlantPost;
