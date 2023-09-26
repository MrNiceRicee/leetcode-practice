import { describe, expect, test } from "bun:test";
import { maxSlidingWindow } from "./maxSlidingWindow";

describe("maxSlidingWindow", () => {
  const testCases = [
    {
      title: "Example 1",
      nums: [1, 3, -1, -3, 5, 3, 6, 7],
      k: 3,
      expected: [3, 3, 5, 5, 6, 7],
    },
    {
      title: "Example 2",
      nums: [1],
      k: 1,
      expected: [1],
    },
    {
      title: "Example 3",
      nums: [1, -1],
      k: 1,
      expected: [1, -1],
    },
    {
      title: "Example 4",
      nums: [9, 11],
      k: 2,
      expected: [11],
    },
  ];

  testCases.forEach(({ title, nums, k, expected }) => {
    test(title, () => {
      const actual = maxSlidingWindow(nums, k);
      expect(actual).toEqual(expected);
    });
  });
});
