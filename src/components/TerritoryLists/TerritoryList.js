import React from "react";

import classes from "./TerritoryList.module.css";

const TerritoryList = (props) => {
  const territories = props.list.map((territory) => {
    return <li>{territory}</li>;
  });

  return (
    <div className={classes.list}>
      <h2>Player {props.number}</h2>
      <ul>{territories}</ul>
    </div>
  );
};

export default TerritoryList;
