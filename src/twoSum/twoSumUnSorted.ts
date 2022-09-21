// twoSums algorithm
const twoSumUnsorted = (nums: number[], target: number): number[] => {
  // create a map to store the number and its index
  const map = new Map();
  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    // check if the map already has the number we need
    if (map.has(target - nums[i])) {
      // return the index of the number we need and the current number
      return [map.get(target - nums[i]), i];
    }
    // if the map doesn't have the number we need, add it to the map
    map.set(nums[i], i);
  }
  // if there are no matches, return an empty array
  return [];
};

// test
const testTwoSumUnsorted = () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  console.log(twoSumUnsorted(nums, target));
};

testTwoSumUnsorted();

export default twoSumUnsorted;
