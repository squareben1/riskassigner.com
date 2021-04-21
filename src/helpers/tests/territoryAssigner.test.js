import { shuffle, createLists } from "../territoryAssigner";

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
    for (let i = 0; i < 100000; i++) {
      let array = [1, 2, 3];
      let arr = shuffle(array);
      count[arr.join("")]++;
    }

    for (let key in count) {
      const diff = count[key] - 16000;
      expect(diff).toBeGreaterThan(300);
      expect(diff).toBeLessThan(1000);
    }
  });
});

describe("#createLists", () => {
  it("returns 2 arrays when passed 2", () => {
    let arr = ["Kamchatka", "Japan"];
    let received = createLists(arr, 2);
    expect(received[0].length).toEqual(1);
    expect(received[1].length).toEqual(1);
  });
});
