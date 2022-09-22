import { expect } from "../expect";

export const isIsomorphic = (s: string, t: string): boolean => {
  // base check
  if (s.length !== t.length) {
    return false;
  }

  // s is the key, t is the value

  // create a map to track the mapping
  const map = new Map();
  // create a set to track the mapped values
  const set = new Set();

  // iterate over the string
  for (let i = 0; i < s.length; i++) {
    // if the map has the key and the value is not equal to the current value
    if (map.has(s[i]) && map.get(s[i]) !== t[i]) {
      return false;
    }
    // if the key doesn't exist & the value is already mapped
    if (!map.has(s[i]) && set.has(t[i])) {
      return false;
    }
    // set the key and value
    map.set(s[i], t[i]);
    // add the value to the set
    set.add(t[i]);
  }
  return true;
};

export const isIsomorphicPractice = (s: string, t: string): boolean => {
  if (s.length !== t.length) {
    return false;
  }
  const map = new Map();
  const set = new Set();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) !== t[i]) {
      return false;
    }
    if (!map.has(s[i]) && set.has(t[i])) {
      return false;
    }
    map.set(s[i], t[i]);
    set.add(t[i]);
  }
  return true;
};

export const isIsomorphicTest = (
  testFunc: (s: string, t: string) => boolean
) => {
  expect(testFunc("egg", "add"), true);
  expect(testFunc("foo", "bar"), false);
  expect(testFunc("paper", "title"), true);
  expect(testFunc("ab", "aa"), false);
};
