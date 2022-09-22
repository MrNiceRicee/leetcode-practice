import { expect } from "../expect";

export const lengthLongestPath = (input: string): number => {
  // split the input by new line
  const lines = input.split("\n");
  // set the max length to 0
  let maxLength = 0;
  // stack to keep track of the length of the path
  const stack: number[] = [];
  // loop through the lines
  for (let i = 0; i < lines.length; i++) {
    // get the line
    const line = lines[i];
    // get the level of the line
    const level = line.lastIndexOf("\t") + 1;
    // get the length of the line
    const length = line.length - level;
    // while the stack length is greater than the level

    while (stack.length > level) {
      // pop the stack
      stack.pop();
    }
    // if the stack length is 0
    if (stack.length === 0) {
      // push the length to the stack
      stack.push(length);
    } else {
      // push the length plus the last stack value to the stack
      stack.push(length + stack[stack.length - 1] + 1);
    }
    // if the line includes a period
    if (line.includes(".")) {
      // set the max length to the max of the max length and the last stack value
      maxLength = Math.max(maxLength, stack[stack.length - 1]);
    }
  }
  // return the max length
  return maxLength;
};

export const lengthLongestPathPractice = (input: string): number => {
  const lines = input.split("\n");
  let maxLength = 0;
  const stack: number[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const level = line.lastIndexOf("\t") + 1;
    const length = line.length - level;

    console.log(line, stack.length, level);
    while (stack.length > level) {
      stack.pop();
    }
    if (stack.length === 0) {
      stack.push(length);
    } else {
      stack.push(length + stack[stack.length - 1] + 1);
    }
    if (line.includes(".")) {
      maxLength = Math.max(maxLength, stack[stack.length - 1]);
    }
  }
  return maxLength;
};

export const lengthLongestPathTest = (testFunc: (input: string) => number) => {
  expect(testFunc("dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"), 20);
  expect(
    testFunc(
      "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
    ),
    32
  );
  expect(testFunc("a"), 0);
  expect(
    testFunc(`dir
\tsubdir1
\tsubdir2
\t\tfile.ext`),
    20
  );
};
