
// twoSumSorted algorithm
const twoSumSorted = (numbers: number[], target: number): number[] => {
  let low = 0;
  let high = numbers.length - 1
  while (low < high) {
    const sum = numbers[low] + numbers[high];
    if (sum === target) {
      return [low + 1, high + 1];
    }
    else if (sum < target) {
      low += 1;
    } else {
      high -= 1;
    }
  }
  return []
}

// test
const testTwoSumSorted = () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  console.log(twoSumSorted(nums, target));
}

testTwoSumSorted();

export default twoSumSorted;