import { expect } from "../expect";

export function isSubsequence(s: string, t: string): boolean {
  // base case

  let foundIndex = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[foundIndex] === t[i]) {
      foundIndex++;
    }
    if (s.length - foundIndex > t.length - i) {
      return false;
    }
  }
  return foundIndex === s.length;
}

// funny enough this is faster than the other solution? (but not by much)
// leetcode says it's a 83ms solution
export const isSubsequencePractice = (s: string, t: string): boolean => {
  let foundIndex = 0;
  let remainingT = t.slice(foundIndex);
  for (let i = 0; i < s.length; i++) {
    const index = remainingT.indexOf(s[i]);
    if (index === -1) {
      return false;
    }
    foundIndex += index + 1;
    if (s.length - foundIndex > t.length - foundIndex) {
      return false;
    }
    // update the remainingT
    remainingT = t.slice(foundIndex);
  }
  return true;
};

export const isSubsequenceTest = (
  testFunc: (s: string, t: string) => boolean
) => {
  expect(testFunc("abc", "ahbgdc"), true);
  expect(testFunc("axc", "ahbgdc"), false);
  expect(testFunc("acb", "ahbgdc"), false);
  expect(testFunc("abc", "abc"), true);
  expect(testFunc("abc", "ab"), false);
  expect(testFunc("abc", "acb"), false);
  expect(testFunc("abc", "ac"), false);
  expect(testFunc("aaaaaa", "bbaaaa"), false);
};
