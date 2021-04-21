import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import PlayerInput from "./components/PlayerInput";
import TerritoryLists from "./components/TerritoryLists/TerritoryLists";

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
          <PlayerInput
            playerNumber={this.state.playerNumber}
            numberChangeHandler={this.numberChangeHandler.bind(this)}
          />
          Number of Players: {this.state.playerNumber}
        </header>
        <TerritoryLists playerNumber={this.state.playerNumber} />
      </div>
    );
  }
}

export default App;
