import TreeNode from "./Tree/TreeNode";
import Node from "./Tree/Node";
import ListNode from "./LinkedList/ListNode";

const deepEqual = (actual: any, expected: any): boolean => {
  if (actual === expected) {
    return true;
  }
  else if (actual instanceof TreeNode && Array.isArray(expected)) {
    return (
      actual.val === expected[0] &&
      deepEqual(actual.left, expected[1]) &&
      deepEqual(actual.right, expected[2])
    );
  }
  else if (actual instanceof Node && Array.isArray(expected)) {
    return (
      actual.val === expected[0] &&
      actual.children.length === expected[1].length &&
      actual.children.every((child, i) => deepEqual(child, expected[1][i]))
    );
  }
  else if (actual instanceof ListNode && Array.isArray(expected)) {
    return (
      actual.val === expected[0] &&
      deepEqual(actual.next, expected[1])
    );
  }
  else if (typeof actual !== typeof expected) {
    return false;
  } else if (typeof actual === "object") {
    if (Array.isArray(actual) && Array.isArray(expected)) {
      if (actual.length !== expected.length) {
        return false;
      }
      for (let i = 0; i < actual.length; i++) {
        if (!deepEqual(actual[i], expected[i])) {
          return false;
        }
      }
      return true;
    } else if (actual instanceof Date && expected instanceof Date) {
      return actual.getTime() === expected.getTime();
    } else if (actual instanceof Map && expected instanceof Map) {
      if (actual.size !== expected.size) {
        return false;
      }
      for (const [key, value] of actual) {
        if (!expected.has(key)) {
          return false;
        }
        if (!deepEqual(value, expected.get(key))) {
          return false;
        }
      }
      return true;
    } else if (actual instanceof Set && expected instanceof Set) {
      if (actual.size !== expected.size) {
        return false;
      }
      for (const value of actual) {
        if (!expected.has(value)) {
          return false;
        }
      }
      return true;
    }
    const actualKeys = Object.keys(actual);
    const expectedKeys = Object.keys(expected);
    if (actualKeys.length !== expectedKeys.length) {
      return false;
    }
    for (const key of actualKeys) {
      if (!expectedKeys.includes(key)) {
        return false;
      }
      if (!deepEqual(actual[key], expected[key])) {
        return false;
      }
    }
    return true;
  }
  return false;
};

export const expect = (actual: any, expected: any) => {
  if (deepEqual(actual, expected)) {
    console.log("✅ pass. actual:", actual, "expected:", expected);
  } else {
    console.log("❌ fail. actual:", actual, "expected:", expected);
    throw new Error("Test failed");
  }
};

// use this
export const inputExpect = (
  func: (...input: any[]) => any,
  input: any,
  expected: any
) => {
  const actual = func(input);
  if (deepEqual(actual, expected)) {
    console.log(
      "✅ pass. input:",
      input,
      "actual:",
      actual,
      "expected:",
      expected
    );
  } else {
    console.log(
      "❌ fail. input:",
      input,
      "actual:",
      actual,
      "expected:",
      expected
    );
    throw new Error("Test failed");
  }
};
