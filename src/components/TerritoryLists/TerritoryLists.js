import React from "react";
import { shuffle } from "../../helpers/territoryAssigner";
import territoriesArray from "../../helpers/territoriesArray";

const territoryLists = () => {
  const shuffledArray = shuffle(territoriesArray);

  return (
    <div>
      <p>
        Territory Lists:
        {territoriesArray}
      </p>
      <p>
        Shuffled:
        {shuffledArray}
      </p>
    </div>
  );
};

export default territoryLists;
