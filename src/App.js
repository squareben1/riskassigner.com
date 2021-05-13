import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import PlayerInput from "./components/PlayerInput";
import TerritoryLists from "./components/TerritoryLists/TerritoryLists";

class App extends Component {
  state = {
    playerNumber: 2,
    showLists: false,
  };

  numberChangeHandler(event) {
    this.setState({ playerNumber: event.target.value });
  }

  showListsHandler() {
    this.setState({ showLists: !this.state.showLists });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <PlayerInput
            playerNumber={this.state.playerNumber}
            numberChangeHandler={this.numberChangeHandler.bind(this)}
            showListsHandler={this.showListsHandler.bind(this)}
          />
          Number of Players: {this.state.playerNumber}
        </header>
        {this.state.showLists && (
          <TerritoryLists playerNumber={this.state.playerNumber} />
        )}
      </div>
    );
  }
}

export default App;
