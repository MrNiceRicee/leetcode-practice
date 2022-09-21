import { expect } from "../expect";

export function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === "+") {
      const a = stack.pop() || 0;
      const b = stack.pop() || 0;
      stack.push(a + b);
    } else if (token === "-") {
      const a = stack.pop() || 0;
      const b = stack.pop() || 0;
      stack.push(b - a);
    } else if (token === "*") {
      const a = stack.pop() || 0;
      const b = stack.pop() || 0;
      stack.push(a * b);
    } else if (token === "/") {
      const a = stack.pop() || 0;
      const b = stack.pop() || 0;
      stack.push(Math.trunc(b / a));
    } else {
      stack.push(+token);
    }
  }
  return stack.pop() || 0;
}

export const evalRPNPractice = (tokens: string[]): number => {
  const stack: Array<number> = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === "+") {
      const first = stack.pop() || 0;
      const second = stack.pop() || 0;
      stack.push(first + second);
    } else if (token === "-") {
      const first = stack.pop() || 0;
      const second = stack.pop() || 0;
      stack.push(second - first);
    } else if (token === "*") {
      const first = stack.pop() || 0;
      const second = stack.pop() || 0;
      stack.push(first * second);
    } else if (token === "/") {
      const first = stack.pop() || 0;
      const second = stack.pop() || 0;
      stack.push(Math.trunc(second / first));
    } else {
      stack.push(+token);
    }
  }
  return stack.pop() || 0;
};

export const evalRPNTest = (testFunc: (tokens: string[]) => number) => {
  expect(testFunc(["2", "1", "+", "3", "*"]), 9);
  expect(testFunc(["4", "13", "5", "/", "+"]), 6);
  expect(
    testFunc([
      "10",
      "6",
      "9",
      "3",
      "+",
      "-11",
      "*",
      "/",
      "*",
      "17",
      "+",
      "5",
      "+",
    ]),
    22
  );
};
