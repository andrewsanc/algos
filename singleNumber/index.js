// Leetcode: https://leetcode.com/problems/single-number/
// Description: Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Example 1:
// Input: [2,2,1]
// Output: 1

// Example 2:
// Input: [4,1,2,1,2]
// Output: 4

function singleNumber(nums) {
  let myTable = {};
  for (let num of nums) {
      myTable[num] = myTable[num] + 1 || 1;
  }
  return Object.keys(myTable).filter(keys => myTable[keys] === 1);
}