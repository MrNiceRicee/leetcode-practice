import { expect } from "../expect";

const isAlphabet = (char: string): boolean => {
  const a = "a".charCodeAt(0);
  const z = "z".charCodeAt(0);
  const A = "A".charCodeAt(0);
  const Z = "Z".charCodeAt(0);
  const charCode = char.charCodeAt(0);
  return (
    (charCode >= a && charCode <= z) || (charCode >= A && charCode <= Z)
  );
};

export const reverseStringWithoutChangingSpecial = (str: string): string => {
  const arr = str.split("");
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    // skip non-alphabet & move left
    if (!isAlphabet(arr[left])) {
      left++;
    } else if (!isAlphabet(arr[right])) {
    // skip non-alphabet & move right
      right--;
    } else {
      // make a temp variable to swap
      const temp = arr[left];
      // swap left & right
      arr[left] = arr[right];
      // swap right & left
      arr[right] = temp;
      // move left
      left++;
      // move right
      right--;
    }
  }
  // return the array as a string
  return arr.join("");
};

export const reverseStringWithoutChangingSpecialTest = (
  testFunc: (str: string) => string
) => {
  expect(testFunc("a,b$c"), "c,b$a");
  expect(testFunc("Ab,c,de!$"), "ed,c,bA!$");
};
