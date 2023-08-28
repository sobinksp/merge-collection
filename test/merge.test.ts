import merge from "../src/merge";
describe("merge", () => {
  test("merges two arrays with the same length", () => {
    const c1: number[] = [1, 3, 5, 7, 9];
    const c2: number[] = [2, 4, 6, 8, 10];
    expect(merge(c1, c2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  test("merge two arrays with difference length", () => {
    const c1: number[] = [2, 4, 6, 8];
    const c2: number[] = [1, 3, 5, 7, 9];
    expect(merge(c1, c2)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test("merge two empty arrays", () => {
    const c1: number[] = [];
    const c2: number[] = [];
    expect(merge(c1, c2)).toEqual([]);
  });
});
