import shuffle from "../territoryAssigner";

const territoryArray = [
  "Kamchatka",
  "Japan",
  "Eastern Australia",
  "Alaska",
  "Northwest Territory",
  "Iceland",
];
describe("#shuffle", () => {
  it("Shuffle: returns shuffled territoryArray", () => {
    expect(shuffle(territoryArray)).not.toEqual(territoryArray);
  });

  const count = {
    123: 0,
    132: 0,
    213: 0,
    231: 0,
    321: 0,
    312: 0,
  };
  it("Shuffle: all permuattions have roughly same probability", () => {
    for (let i = 0; i < 1000000; i++) {
      let array = [1, 2, 3];
      const arr = shuffle(array);
      count[arr.join("")]++;
    }

    for (let key in count) {
      const diff = count[key] - 160000;
      expect(diff).toBeGreaterThan(5500);
      expect(diff).toBeLessThan(8000);
    }
  });
});
