// Leetcode: https://leetcode.com/problems/permutations/submissions/
// Description: Given a collection of distinct integers, return all possible permutations.

// Example:
// Input: [1,2,3]
// Output:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

function permute(nums, currSet = [], results = []) {
  if (!nums.length) {
    results.push([...currSet]);
  }

  for (let i = 0; i < nums.length; i++) {
    const newNums = nums.filter((num, index) => index !== i);
    currSet.push(nums[i]);
    permute(newNums, currSet, results);
    currSet.pop();
  }

  return results;
}
