import React from "react";
import territoriesArray from "../../helpers/territoriesArray";
import TerritoryList from "./TerritoryList";
import classes from "./TerritoryLists.module.css";
import useShuffle from "../../hooks/use-shuffle";

const TerritoryLists = (props) => {
  let lists = props.chunks.map((chunk, i) => {
    return <TerritoryList key={i} list={chunk} number={i + 1} />;
  });

  return <div className={classes.listsContainer}>{lists}</div>;
};

export default TerritoryLists;
