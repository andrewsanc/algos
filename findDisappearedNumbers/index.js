// Leetcode: https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
// Description: Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), 
// some elements appear twice and others appear once.

// Find all the elements of [1, n] inclusive that do not appear in this array.

// Example:
// Input:
// [4,3,2,7,8,2,3,1]

// Output:
// [5,6]

// Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

function findDisappearedNumbers(nums) {
  let results = [];
  for (let i=1; i<nums.length+1; i++) {
      if (nums.indexOf(i) === -1) {
          results.push(i);
      }
  }
  return results;
}