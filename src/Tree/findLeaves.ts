import { expect } from "../expect";
import TreeNode from "./TreeNode";

export const findLeaves = (root: TreeNode | null): number[][] => {
  // create an array to store the leaves
  const leaves: number[][] = [];
  // create a function to traverse the tree
  const traverse = (node: TreeNode | null): number => {
    // if the node is null
    if (node === null) {
      // return -1
      return -1;
    }
    // set the level to the max of the left and right nodes
    const level = 1 + Math.max(traverse(node.left), traverse(node.right));
    // if the leaves array does not have a level
    if (leaves.length === level) {
      // push an empty array to the leaves array
      leaves.push([]);
    }
    // push the node value to the leaves array
    leaves[level].push(node.val);
    // return the level
    return level;
  };
  // traverse the root
  traverse(root);
  // return the leaves
  return leaves;
};

export const findLeavesPractice = (root: TreeNode | null): number[][] => {
  const leaves: number[][] = [];

  const traverse = (node: TreeNode | null): number => {
    if (node === null) {
      return -1;
    }
    const level = 1 + Math.max(traverse(node.left), traverse(node.right));
    if (leaves.length === level) {
      leaves.push([]);
    }
    leaves[level].push(node.val);
    return level;
  };

  traverse(root);

  return leaves;
};

export const findLeavesTest = (
  testFunc: (root: TreeNode | null) => number[][]
) => {
  expect(
    testFunc(
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(4), new TreeNode(5)),
        new TreeNode(3)
      )
    ),
    [[4, 5, 3], [2], [1]]
  );
  expect(testFunc(new TreeNode(1)), [[1]]);
  expect(testFunc(null), []);
  expect(
    testFunc(
      new TreeNode(
        1,
        new TreeNode(2, new TreeNode(4), new TreeNode(5)),
        new TreeNode(3, new TreeNode(6), new TreeNode(7))
      )
    ),
    [[4, 5, 6, 7], [2, 3], [1]]
  );
};
