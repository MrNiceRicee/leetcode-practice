import { expect } from "../expect";

export function lengthOfLongestSubstring(s: string): number {
  // base check
  if (!s?.length) {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }
  // create a map that tracks the duplicates & distance between duplicates
  const map = new Map();
  let max = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    // check if the char is in the current map
    if (map.has(s[i])) {
      // if it is, then we need to update the start index
      start = Math.max(start, map.get(s[i]) + 1);
    }
    // update the map with the current index
    map.set(s[i], i);
    // update the max
    max = Math.max(max, i - start + 1);
  }
  return max;
}

// export const lengthOfLongestSubStringPractice = (s: string): number => {
// }

export const lengthOfLongestSubstringTest = (
  testFunc: (s: string) => number
) => {
  expect(testFunc("abcabcbb"), 3);
  expect(testFunc("bbbbb"), 1);
  expect(testFunc("pwwkew"), 3);
  expect(testFunc("aab"), 2);
  expect(testFunc("dvdf"), 3);
};
