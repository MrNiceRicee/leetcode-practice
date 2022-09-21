export const expect = (actual: any, expected: any) => {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    if (actual.length !== expected.length) {
      throw new Error(
        `Expected ${expected} but got ${actual} because the lengths are different`
      );
    }
    for (let i = 0; i < actual.length; i++) {
      expect(actual[i], expected[i]);
    }
  } else if (typeof actual === "object" && typeof expected === "object") {
    const actualKeys = Object.keys(actual);
    const expectedKeys = Object.keys(expected);
    if (actualKeys.length !== expectedKeys.length) {
      throw new Error(
        `Expected ${expected} but got ${actual} because the lengths are different`
      );
      return;
    }
    for (let i = 0; i < actualKeys.length; i++) {
      expect(actual[actualKeys[i]], expected[actualKeys[i]]);
    }
  } else if (actual !== expected) {
    throw new Error(`Expected ${expected} but got ${actual}`);
  }
  // print out pass
  console.log("pass");
};
