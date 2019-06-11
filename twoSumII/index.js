// Leetcode : https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
// Time: O(N) Space: O(1)

function twoSumII(numbers, target) {
  let i=0;
  let j=numbers.length - 1;
  while (i < j) {
      if (numbers[i] + numbers[j] === target) {
          return [i+1, j+1];
      }
      else if (numbers[i] + numbers[j] > target) {
          j--;
      } else {
          i++
      }
  }
  return [];
}