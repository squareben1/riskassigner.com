import { useState, useRef } from "react";

const PlayerInput = (props) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.showListsHandler(inputRef.current.value);
  };

  const inputRef = useRef();

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
              defaultValue="2"
              min="2"
              max="6"
              ref={inputRef}
              // onChange={props.numberChangeHandler}
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
