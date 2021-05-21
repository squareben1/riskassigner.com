import React, { Component } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import PlayerInput from "./components/PlayerInput";
import TerritoryLists from "./components/TerritoryLists/TerritoryLists";

class App extends Component {
  state = {
    playerNumber: 2,
    showLists: false,
    territories: null,
  };

  numberChangeHandler(event) {
    this.setState({
      playerNumber: event.target.value,
    });
  }

  listsHandler() {
    this.setState({
      showLists: true,
      territories: <TerritoryLists playerNumber={this.state.playerNumber} />,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <PlayerInput
            playerNumber={this.state.playerNumber}
            numberChangeHandler={this.numberChangeHandler.bind(this)}
            showListsHandler={this.listsHandler.bind(this)}
          />
        </header>
        {this.state.showLists && this.state.territories}
      </div>
    );
  }
}

export default App;
