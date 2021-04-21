const shuffle = (array) => {
  let arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const chunkArray = (arr, players) => {
  const chunks = [];
  while (arr.length) {
    const chunkSize = Math.ceil(arr.length / players--);
    const chunk = arr.slice(0, chunkSize);
    chunks.push(chunk);
    arr = arr.slice(chunkSize);
  }

  return chunks;
};

module.exports = { shuffle, chunkArray };
