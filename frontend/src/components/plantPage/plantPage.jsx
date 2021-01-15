import React, { Component } from "react";
import Button from "../button/button";
import "./plantPage.css";
import PlantPost from "../plantPost/plantPost";
import NewPlantForm from "../newPlant/newPlantForm";

class PlantPage extends Component {
  state = {
    displayNewPlantForm: false,
    plants: [],
  };

  handleAddPlant = (newPlant) => {
    newPlant.id = this.state.plants.length;
    this.state.plants.push(newPlant);
    this.setState({
      displayNewPlantForm: false,
      plants: this.state.plants,
    });
  };

  handleDisplayNewPlantForm = () => {
    this.setState({
      displayNewPlantForm: true,
      plants: this.state.plants,
    });
  };

  render() {
    return (
      <div>
        <h1>plants</h1>
        {this.state.displayNewPlantForm && (
          <NewPlantForm onSubmit={this.handleAddPlant} />
        )}
        {!this.state.displayNewPlantForm && (
          <Button
            text={"New Plant"}
            handleClick={this.handleDisplayNewPlantForm}
          />
        )}
        <ul>
          {this.state.plants.map((plant) => (
            <PlantPost
              key={plant.id}
              name={plant.name}
              location={plant.location}
              image={plant.image}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default PlantPage;
