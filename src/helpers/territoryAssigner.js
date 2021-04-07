const shuffler = (array) => {
  let arr = array.slice();
  arr.sort(() => Math.random() - 0.5);
  console.log("base array", array);
  console.log("shuffled array", arr);
  return arr;
};

module.exports = shuffler;

