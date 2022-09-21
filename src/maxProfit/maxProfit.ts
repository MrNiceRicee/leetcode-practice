import { expect } from "../expect";

export const maxProfit = (prices: number[]): number => {
  // set the min price to the first price
  let minPrice = prices[0];
  // set the max profit to 0
  let maxProfit = 0;
  // loop through the prices
  for (let i = 1; i < prices.length; i++) {
    // if the price is less than the min price
    if (prices[i] < minPrice) {
      // set the min price to the price
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      // set the max profit to the price minus the min price
      maxProfit = prices[i] - minPrice;
    }
  }
  // return the max profit
  return maxProfit;
};

export const maxProfitPractice = (prices: number[]): number => {
  let minPrice = prices[0];
  let maxPrice = 0;
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxPrice = Math.max(prices[i] - minPrice, maxPrice);
  }
  return maxPrice;
  // let minPrice = prices[0];
  // return prices.reduce((previous, current) => {
  //   minPrice = Math.min(minPrice, current);
  //   return Math.max(previous, current - minPrice);
  // }, 0);
};

export const maxProfitTest = (testFunc: (prices: number[]) => number) => {
  expect(testFunc([7, 1, 5, 3, 6, 4]), 5);
  expect(testFunc([7, 6, 4, 3, 1]), 0);
};
