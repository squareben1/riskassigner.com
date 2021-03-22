import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import PlayerInput from "./components/PlayerInput";

class App extends Component {
    state = {
      playerNumber: 2,
    };

  numberChangeHandler(event) {
    this.setState({ playerNumber: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <PlayerInput numberChangeHandler={this.numberChangeHandler} />
        </header>
      </div>
    );
  }
}

export default App;
