import React from "react";

const PlayerInput = () => {
    return (
      <>
        <section className="playerInput">
            <div className="playerInputContainer">
                <div className="inputContainer">
                    <div className="playerInfo">
                        <h3>Players:</h3>
                        <div className="numberOfPlayers">2</div>
                    </div>
                </div>
                <div className="goContainer">
                    <button class="btn assign">
                    <h3>Assign</h3>
                    </button>
                </div>
            </div>
        </section>
      </>
    );
  };
  
  export default PlayerInput;
  