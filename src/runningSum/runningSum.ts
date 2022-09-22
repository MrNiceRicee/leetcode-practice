import { expect } from "../expect";
export const runningSum = (nums: number[]): number[] => {
  const sums = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    sums.push(sums[i - 1] + nums[i]);
  }
  return sums;
};

// uncomment when ready for another practice or solution
// export const runningSumPractice = (nums: number[]): number[] => {
// };

export const runningSumTest = (testFunc: (nums: number[]) => number[]) => {
  expect(testFunc([1, 2, 3, 4]), [1, 3, 6, 10]);
  expect(testFunc([1, 1, 1, 1, 1]), [1, 2, 3, 4, 5]);
  expect(testFunc([3, 1, 2, 10, 1]), [3, 4, 6, 16, 17]);
};
