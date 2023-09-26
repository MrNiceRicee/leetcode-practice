/*

You are given an array of integers nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position.

Return the max sliding window.

 

Example 1:

Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
Example 2:

Input: nums = [1], k = 1
Output: [1]

*/

// deque class
// - push
// - pop
// - peek
// - isEmpty

class Deque {
  private _store: number[] = [];

  push(val: number) {
    this._store.push(val);
  }

  pop(): number | undefined {
    return this._store.pop();
  }

  peek(): number | undefined {
    return this._store[this._store.length - 1];
  }

  isEmpty(): boolean {
    return this._store.length === 0;
  }
}

export function maxSlidingWindow(nums: number[], k: number): number[] {
  if (k === 1) {
    return nums;
  }
  const deque = new Deque();
  const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    // remove the first element if it is outside the window
    if (!deque.isEmpty() && deque.peek()! < i - k + 1) {
      deque.pop();
    }

    // remove all elements that are smaller than the current element
    while (!deque.isEmpty() && nums[deque.peek()!] < nums[i]) {
      deque.pop();
    }

    // add the current element
    deque.push(i);

    // add the max element to the result
    if (i >= k - 1) {
      result.push(nums[deque.peek()!]);
    }
  }

  return result;
}
