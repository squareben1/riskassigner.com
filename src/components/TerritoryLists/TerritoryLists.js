import React from "react";
import shuffle from "../../helpers/shuffle";
import chunkArray from "../../helpers/chunkArray";
import territoriesArray from "../../helpers/territoriesArray";
import TerritoryList from "./TerritoryList";
import classes from "./TerritoryLists.module.css";

const TerritoryLists = (props) => {
  const shuffledArray = shuffle(territoriesArray);
  const chunkedArray = chunkArray(shuffledArray, props.playerNumber);

  let lists = chunkedArray.map((chunk, i) => {
    return <TerritoryList key={i} list={chunk} number={i + 1} />;
  });

  return <div className={classes.listsContainer}>{lists}</div>;
};

export default TerritoryLists;
