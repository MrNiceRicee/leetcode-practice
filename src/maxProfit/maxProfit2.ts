import { expect } from "../expect";

export const maxProfit2 = (prices: number[]): number => {
  let total = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      total += prices[i] - prices[i - 1];
    }
  }
  return total
};

export const maxProfitTest = (testFunc: (prices: number[]) => number) => {
  expect(testFunc([7, 1, 5, 3, 6, 4]), 7);
  expect(testFunc([1, 2, 3, 4, 5]), 4);
  expect(testFunc([7, 6, 4, 3, 1]), 0);
};
