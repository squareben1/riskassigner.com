import React from "react";

const PlayerInput = (props) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.showListsHandler();
  };

  return (
    <>
      <section className="playerInput">
        <div className="playerInputContainer">
          <form className="player-form" onSubmit={onSubmitHandler}>
            <label for="num_players">Players:</label>
            <input
              type="number"
              name="num_players"
              id="num_players"
              min="2"
              max="6"
              onChange={props.numberChangeHandler}
              value={props.playerNumber}
            />
            <button type="submit" className="btn assign">
              Assign
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default PlayerInput;
