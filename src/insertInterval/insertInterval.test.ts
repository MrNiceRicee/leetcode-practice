import { describe, expect, test } from "bun:test";
import { insert } from "./insertInterval";

describe("insertInterval", () => {
  test("Example 1", () => {
    const intervals = [
      [1, 3],
      [6, 9],
    ];
    const newInterval = [2, 5];
    const expected = [
      [1, 5],
      [6, 9],
    ];
    const actual = insert(intervals, newInterval);
    expect(actual).toEqual(expected);
  });

  test("Example 2", () => {
    const intervals = [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ];
    const newInterval = [4, 8];
    const expected = [
      [1, 2],
      [3, 10],
      [12, 16],
    ];
    const actual = insert(intervals, newInterval);
    expect(actual).toEqual(expected);
  });

  test("Example 3", () => {
    const intervals: number[][] = [];
    const newInterval = [5, 7];
    const expected = [[5, 7]];
    const actual = insert(intervals, newInterval);
    expect(actual).toEqual(expected);
  });
});
