import chunkArray from "../chunkArray";
import territoriesArray from "../territoriesArray";

const territoryArray = [
  "Kamchatka",
  "Japan",
  "Eastern Australia",
  "Alaska",
  "Northwest Territory",
  "Iceland",
];

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
