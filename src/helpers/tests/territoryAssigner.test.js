import { shuffle, chunkArray } from "../territoryAssigner";
import territoriesArray from "../territoriesArray";

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

describe("#chunkArray", () => {
  it("returns 2 arrays when passed 2", () => {
    let arr = ["Kamchatka", "Japan"];
    let received = chunkArray(arr, 2);
    expect(received[0].length).toEqual(1);
    expect(received[1].length).toEqual(1);
  });
  it("returns 2 arrays when passed 2", () => {
    let received = chunkArray(territoryArray, 2);
    let arr1 = ["Kamchatka", "Japan", "Eastern Australia"];
    let arr2 = ["Alaska", "Northwest Territory", "Iceland"];
    expect(received[0].length).toEqual(3);
    expect(received[1].length).toEqual(3);
    expect(received[0]).toEqual(arr1);
    expect(received[1]).toEqual(arr2);
  });
  it("returns 2 arrays when passed 2", () => {
    const unevenTerritoryArray = [
      "Kamchatka",
      "Japan",
      "Eastern Australia",
      "Alaska",
      "Northwest Territory",
    ];
    let received = chunkArray(unevenTerritoryArray, 2);

    expect(received[0].length).toEqual(3);
    expect(received[1].length).toEqual(2);
  });

  it("chunks entire list with full 6 players", () => {
    let received = chunkArray(territoriesArray, 6);
    expect(received[0].length).toEqual(7);
  });

  it("chunks entire list with 5 players, 1st 2 players get 1 more", () => {
    let received = chunkArray(territoriesArray, 5);
    expect(received[0].length).toEqual(9);
    expect(received[1].length).toEqual(9);
    expect(received[2].length).toEqual(8);
    expect(received[3].length).toEqual(8);
    expect(received[4].length).toEqual(8);
  });
});
