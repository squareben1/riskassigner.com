import { useEffect, useState } from "react";

import shuffle from "../helpers/shuffle";
import chunkArray from "../helpers/chunkArray";

const useShuffle = (array) => {
  const shuffleArray = (players) => {
    const shuffledArray = shuffle(array);
    const chunks = chunkArray(shuffledArray, players);
    return chunks;
  };

  return {
    shuffle: shuffleArray,
  };
};

export default useShuffle;

//  setCounter((prevCounter) => prevCounter + 1);
