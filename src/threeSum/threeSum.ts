import { expect } from "../expect";

export const threeSum = (nums: number[]): number[][] => {
  // base case
  if (nums.length < 3) {
    return [];
  }
  // sort the array
  nums.sort((a, b) => a - b);
  // create a set to store the results
  const results: Set<number[]> = new Set();
  // loop through the array
  for (let i = 0; i < nums.length - 2; i++) {
    // create a set to store the numbers we've seen
    const seen = new Set();
    // loop through the array starting at the next index
    for (let j = i + 1; j < nums.length; j++) {
      // check if the set already has the number we need
      if (seen.has(-(nums[i] + nums[j]))) {
        // add the numbers to the results set
        results.add([nums[i], nums[j], -(nums[i] + nums[j])]);
      }
      // if the set doesn't have the number we need, add it to the set
      seen.add(nums[j]);
    }
  }
  // return the results
  return [...results];
};

export const threeSumTest = (testFunc: (nums: number[]) => number[][]) => {
  const nums = [-1, 0, 1, 2, -1, -4];
  const results = testFunc(nums);
  expect(results.length, 2);
  expect(results[0][0], -1);
  expect(results[0][1], 0);
  expect(results[0][2], 1);
  expect(results[1][0], -1);
  expect(results[1][1], -1);
  expect(results[1][2], 2);
};
