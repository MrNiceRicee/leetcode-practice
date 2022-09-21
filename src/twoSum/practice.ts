const twoSumUnsorted = (nums: number[], target: number): number[] => {
  // create two heads to track the low & high
  // when the total is < target increment low
  // when total is > target increment high
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    if (nums[low] + nums[high] === target) {
      return [low + 1, high + 1];
    }

    if (nums[low] + nums[high] < target) {
      low++;
    } else {
      high--;
    }
  }
  return [];
};

export default twoSumUnsorted;
