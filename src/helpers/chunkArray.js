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

export default chunkArray;
