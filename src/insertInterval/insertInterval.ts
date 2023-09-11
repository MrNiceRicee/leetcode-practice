/*
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

 

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
*/

function merge(a: number[], b: number[]): number[] {
  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}

function overlap(a: number[], b: number[]): boolean {
  return Math.min(a[1], b[1]) >= Math.max(a[0], b[0]);
}

export function insert(
  intervals: number[][],
  newInterval: number[]
): number[][] {
  // we can check for (a1, b1) and (a2, b2) overlap by checking if a1 <= b2 and a2 <= b1, or (min(b1,b2) >= max(a1,a2))
  // then we can merge by taking min(a1,a2) and max(b1,b2)

  return intervals
    .reduce((previous, current, idx) => {
      // ex: [1,3] [6,7] [8,9] , newInterval = [2,5]
      // previous = [[1,3]]
      // current = [6,7]
      // newInterval = [2,5]
      // so we want to merge [1,3] and [2,5] to get [1,5]
      // since there is no overlap, we just push [6,7] and [8,9] to previous
      if (overlap(current, newInterval)) {
        newInterval = merge(current, newInterval);
      } else if (current[0] < newInterval[0]) {
        previous.push(current);
      } else {
        previous.push(newInterval);
        newInterval = current;
      }
      return previous;
    }, [] as number[][])
    .concat([newInterval]);
}
