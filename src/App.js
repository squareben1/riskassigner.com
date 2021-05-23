import React, { useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import PlayerInput from "./components/PlayerInput";
import territoriesArray from "./helpers/territoriesArray";
import TerritoryLists from "./components/TerritoryLists/TerritoryLists";
import useShuffle from "./hooks/use-shuffle";

function App() {
  const [playerNumber, setPlayerNumber] = useState(2);
  const [showLists, setShowLists] = useState(false);
  const [chunkedTerritories, setChunkedTerritories] = useState([]);

  const { shuffle } = useShuffle(territoriesArray);

  const listsHandler = (players) => {
    setPlayerNumber(players);
    const chunks = shuffle(players);
    setChunkedTerritories(chunks);
    setShowLists(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <PlayerInput showListsHandler={listsHandler} />
      </header>
      {showLists && <TerritoryLists chunks={chunkedTerritories} />}
    </div>
  );
}

export default App;

//       territories: ,
