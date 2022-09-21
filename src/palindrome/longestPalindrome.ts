import { expect } from "../expect";

export const longestPalindrome = (s: string): number => {
  // create a map to store the count of each character
  const map = new Map();
  // loop through the string
  for (let i = 0; i < s.length; i++) {
    // if the character is in the map
    if (map.has(s[i])) {
      // increment the count
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      // set the count to 1
      map.set(s[i], 1);
    }
  }
  // set the longest palindrome to 0
  let longestPalindrome = 0;
  // loop through the map
  map.forEach((value) => {
    // if the value is even
    if (value % 2 === 0) {
      // add the value to the longest palindrome
      longestPalindrome += value;
    } else {
      // add the value minus 1 to the longest palindrome
      longestPalindrome += value - 1;
    }
  });
  // if the longest palindrome is less than the string length
  if (longestPalindrome < s.length) {
    // increment the longest palindrome
    longestPalindrome++;
  }
  // return the longest palindrome
  return longestPalindrome;
};

// longest palindrome alternative
export const longestPalindromePractice = (s: string): number => {
  // create a set to store the characters
  const set = new Set();
  // loop through the string
  for (let i = 0; i < s.length; i++) {
    // if the character is in the set
    if (set.has(s[i])) {
      // delete the character
      set.delete(s[i]);
    } else {
      // add the character
      set.add(s[i]);
    }
  }
  // return the set size or the set size minus 1
  return set.size > 0 ? s.length - set.size + 1 : s.length;
}

export const longestPalindromeTest = (testFunc: (s: string) => number) => {
  expect(testFunc("abccccdd"), 7);
  expect(testFunc("a"), 1);
  expect(testFunc("bb"), 2);
  expect(testFunc("ccc"), 3);
  expect(testFunc("cccc"), 4);
  expect(testFunc("ccccc"), 5);
  expect(testFunc("racecar"), 7);
  expect(testFunc("tattarrattat"), 12);
  expect(testFunc("a star a tar a"), 13);
};
