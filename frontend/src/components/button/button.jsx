import React, { Component } from "react";
import "./button.css";

class Button extends Component {
  state = {
    text: this.props.text,
    handleClick: this.props.handleClick,
  };

  render() {
    return (
      <button
        onClick={this.state.handleClick}
        className="btn btn-secondary btn-lg"
      >
        {this.state.text}
      </button>
    );
  }
}

export default Button;
