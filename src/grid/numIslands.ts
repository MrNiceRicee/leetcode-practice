import { expect } from "../expect";

const breadthFirstSearch = (grid: string[][], row: number, col: number) => {
  // create a queue
  const queue: number[][] = [];
  queue.push([row, col]);
  // while the queue is not empty
  while (queue.length) {
    // shift the row and col from the queue
    const [row, col] = queue.shift()!;
    // check if in bounds
    if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
      continue;
    }
    // if the grid at the row and col is not 1
    if (grid[row][col] !== "1") {
      continue;
    }
    // set the grid at the row and col to 0
    grid[row][col] = "0";
    // push left, right, up, and down to the queue
    queue.push([row, col - 1]); // left
    queue.push([row, col + 1]); // right
    queue.push([row - 1, col]); // up
    queue.push([row + 1, col]); // down
  }
};

const depthFirstSearch = (grid: string[][], row: number, col: number) => {
  // check if in bounds
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
    return;
  }
  // if the grid at the row and col is not 1
  if (grid[row][col] !== "1") {
    return;
  }
  // set the grid at the row and col to 0
  grid[row][col] = "0";
  // call depthFirstSearch on left, right, up, and down
  depthFirstSearch(grid, row, col - 1); // left
  depthFirstSearch(grid, row, col + 1); // right
  depthFirstSearch(grid, row - 1, col); // up
  depthFirstSearch(grid, row + 1, col); // down
};

// depth first search
export const numIslandsDFS = (grid: string[][]): number => {
  // foundIslands
  let foundIslands = 0;
  // no mutations on the grid
  const gridCopy = grid.map((row) => [...row]);
  // for each row in the grid
  for (let row = 0; row < gridCopy.length; row++) {
    // for each col in the grid
    for (let col = 0; col < gridCopy[0].length; col++) {
      // if the grid at the row and col is 1
      if (gridCopy[row][col] === "1") {
        // increment foundIslands
        foundIslands++;
        // call depthFirstSearch on the grid, row, and col
        depthFirstSearch(gridCopy, row, col);
      }
    }
  }
  return foundIslands;
};

// breadth first search
export const numIslandsBFS = (grid: string[][]): number => {
  // foundIslands
  let foundIslands = 0;
  // no mutations on the grid
  const gridCopy = grid.map((row) => [...row]);
  // for each row in the grid
  for (let row = 0; row < gridCopy.length; row++) {
    // for each col in the grid
    for (let col = 0; col < gridCopy[0].length; col++) {
      // if the grid at the row and col is 1
      if (gridCopy[row][col] === "1") {
        // increment foundIslands
        foundIslands++;
        // call breadthFirstSearch on the grid, row, and col
        breadthFirstSearch(gridCopy, row, col);
      }
    }
  }
  return foundIslands;
};

const practiceDFS = (grid: string[][], row: number, col: number) => {
  if (row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) {
    return;
  }
  if (grid[row][col] !== "1") {
    return;
  }
  grid[row][col] = "0";
  practiceDFS(grid, row, col - 1); // left
  practiceDFS(grid, row, col + 1); // right
  practiceDFS(grid, row - 1, col); // top
  practiceDFS(grid, row + 1, col); // bottom
};

export const numIslandsPractice = (grid: string[][]): number => {
  let foundIslands = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        foundIslands++;
        practiceDFS(grid, row, col);
      }
    }
  }
  return foundIslands;
};

export const numIslandsTest = (testFunc: (grid: string[][]) => number) => {
  expect(
    testFunc([
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ]),
    1
  );
  expect(
    testFunc([
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ]),
    3
  );
};
