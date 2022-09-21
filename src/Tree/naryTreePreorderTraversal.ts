import { expect } from "../expect";
import Node from "./Node";

export const preOrder = (root: Node | null): number[] => {
  // create an array to store the values
  const values: number[] = [];
  // create a function to traverse the tree
  const traverse = (node: Node | null) => {
    // if the node is null
    if (node === null) {
      // return
      return;
    }
    // push the node value to the values array
    values.push(node.val);
    // loop through the node children
    for (let i = 0; i < node.children.length; i++) {
      // traverse the child
      traverse(node.children[i]);
    }
  };
  // traverse the root
  traverse(root);
  // return the values
  return values;
};

export const preOrderPractice = (root: Node | null): number[] => {
  const values: number[] = [];

  const traverse = (node: Node | null) => {
    if (node === null) {
      // return null
      return;
    }
    values.push(node.val);
    // traverse the children
    for (let i = 0; i < node.children.length; i++) {
      traverse(node.children[i]);
    }
  };
  // traverse the root
  traverse(root);

  return values;
};

export const preOrderTest = (testFunc: (root: Node | null) => number[]) => {
  const node = new Node(1);
  node.children = [new Node(3), new Node(2), new Node(4)];
  node.children[0].children = [new Node(5), new Node(6)];
  expect(testFunc(node), [1, 3, 5, 6, 2, 4]);
};
