import { expect } from "../expect";

export const minMeetingRooms2 = (intervals: number[][]): number => {
  const startTimes: number[] = [];
  const endTimes: number[] = [];
  for (let i = 0; i < intervals.length; i++) {
    startTimes.push(intervals[i][0]);
    endTimes.push(intervals[i][1]);
  }
  startTimes.sort((a, b) => a - b);
  endTimes.sort((a, b) => a - b);
  let rooms = 0;
  let endTimesIndex = 0;
  for (let i = 0; i < startTimes.length; i++) {
    if (startTimes[i] < endTimes[endTimesIndex]) {
      rooms++;
    } else {
      endTimesIndex++;
    }
  }
  return rooms;
};

export const minMeetingRooms2Test = (
  testFunc: (intervals: number[][]) => number
) => {
  expect(
    testFunc([
      [0, 30],
      [5, 10],
      [15, 20],
    ]),
    2
  );
  expect(
    testFunc([
      [7, 10],
      [2, 4],
    ]),
    1
  );
};
