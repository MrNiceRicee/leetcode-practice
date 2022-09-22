import { inputExpect } from "../expect";

export const pivotIndex = (nums: number[]): number => {
  let leftSum = 0;
  let rightSum = nums.reduce((previous, current) => previous + current, 0);
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

export const pivotIndexPractice = (nums: number[]): number => {
  let leftSum = 0;
  let rightSum = nums.reduce((prev, curr) => prev + curr, 0);
  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

// export const pivotIndexPractice = (nums: number[]): number => {};

export const pivotIndexTest = (testFunc: (nums: number[]) => number) => {
  // expect(testFunc([1, 7, 3, 6, 5, 6]), 3);
  // expect(testFunc([1, 2, 3]), -1);
  inputExpect(testFunc, [1, 7, 3, 6, 5, 6], 3);
  inputExpect(testFunc, [1, 2, 3], -1);
};
