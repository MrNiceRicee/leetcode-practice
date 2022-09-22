import { lengthOfLongestSubstring } from "./longestSubString";

const expect = (actual: any, expected: any) => {
  if (actual !== expected) {
    throw new Error(`Expected ${expected}, but got ${actual}`);
  }
  console.log(`passed: ${actual} === ${expected}`);
};

const main = () => {
  expect(lengthOfLongestSubstring("abcabcbb"), 3);
  expect(lengthOfLongestSubstring("bbbbb"), 1);
  expect(lengthOfLongestSubstring("pwwkew"), 3);
  expect(lengthOfLongestSubstring("aab"), 2);
  expect(lengthOfLongestSubstring("dvdf"), 3);
};

main();
