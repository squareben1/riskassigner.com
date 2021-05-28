import React, { useState } from "react";

import "./styles/App.css";
import Header from "./components/Header";
import PlayerInput from "./components/PlayerInput";
import territoriesArray from "./helpers/territoriesArray";
import TerritoryLists from "./components/TerritoryLists/TerritoryLists";
import useShuffle from "./hooks/use-shuffle";

function App() {
  const [showLists, setShowLists] = useState(false);

  const { shuffledArray, shuffle } = useShuffle(territoriesArray);

  const listsHandler = (players) => {
    shuffle(players);
    setShowLists(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <PlayerInput showListsHandler={listsHandler} />
      </header>
      {showLists && <TerritoryLists chunks={shuffledArray} />}
    </div>
  );
}

export default App;
