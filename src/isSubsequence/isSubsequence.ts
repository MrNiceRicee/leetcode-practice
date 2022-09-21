import { expect } from "../expect";

function isSubsequence(s: string, t: string): boolean {
  // base case
  
  let foundIndex = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[foundIndex] === t[i]){ 
      foundIndex++;
    }
    if (s.length - foundIndex > t.length - i){
      return false
    }
  }
  return foundIndex === s.length
};

export const isSubsequenceTest = () => {
  expect(isSubsequence("abc", "ahbgdc"), true);
  expect(isSubsequence("axc", "ahbgdc"), false);
  expect(isSubsequence("acb", "ahbgdc"), false);
  expect(isSubsequence("abc", "abc"), true);
  expect(isSubsequence("abc", "ab"), false);
  expect(isSubsequence("", "ahbgdc"), true);
};


export default isSubsequence;