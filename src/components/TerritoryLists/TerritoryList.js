import React from "react";

import classes from "./TerritoryList.module.css";

const TerritoryList = (props) => {
  const territories = props.list.map((territory, i) => {
    return <li key={i}>{territory}</li>;
  });

  return (
    <div className={classes.list}>
      <h2>Player {props.number}</h2>
      <ul>{territories}</ul>
    </div>
  );
};

export default TerritoryList;
