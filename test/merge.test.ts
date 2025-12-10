import { merge } from "../src/merge";

describe("merge()", () => {
  test("should merge three arrays correctly", () => {
    const c1 = [0, 3, 4];
    const c2 = [1, 2, 5];
    const c3 = [9, 6, 4];

    expect(merge(c1, c2, c3)).toEqual([
      0, 1, 2, 3, 4, 4, 5, 6, 9
    ]);
  });

  test("should work with empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
  });

  test("should work with duplicates", () => {
    const c1 = [1, 2, 3];
    const c2 = [1, 2, 3];
    const c3 = [3, 2, 1];

    expect(merge(c1, c2, c3)).toEqual([
      1, 1, 1, 2, 2, 2, 3, 3, 3
    ]);
  });

  test("should work if one array is empty", () => {
    expect(merge([1, 2], [], [5, 3])).toEqual([1, 2, 3, 5]);
  });
});
