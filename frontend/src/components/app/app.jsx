import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../navBar/navBar";
import UserPage from "../userPage/userPage";
import PlantPage from "../plantPage/plantPage";
import "./app.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/user" component={UserPage} />
            <Route path="/plants" component={PlantPage} />
            <Route path="/"></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
