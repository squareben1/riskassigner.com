import React, { Component } from "react";

class PlayerInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerNumber: 2,
    };
  }
  onNumberChange(event) {
    this.setState({ playerNumber: event.target.value });
  }

  render() {
    return (
      <>
        <section className="playerInput">
          <div className="playerInputContainer">
            <form className="player-form">
              <label for="num_players">Players:</label>
              <input
                type="number"
                name="num_players"
                id="num_players"
                placeholder="2"
                min="2"
                max="6"
                onChange={this.onNumberChange.bind(this)}
              />
              <button type="submit" className="btn assign">
                Assign
              </button>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default PlayerInput;
