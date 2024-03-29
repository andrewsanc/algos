// Leetcode: https://leetcode.com/problems/majority-element/
// Description: Given an array of size n, find the majority element. 
// The majority element is the element that appears more than ⌊ n/2 ⌋ times.
// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:
// Input: [3,2,3]
// Output: 3

// Example 2:
// Input: [2,2,1,1,1,2,2]
// Output: 2

function majorityElement(nums) { // My Solution
  let myTable = {};
  for (let num of nums) {
      myTable[num] = myTable[num] + 1 || 1;
  }
  let values = Object.values(myTable);
  let max = Math.max(...values);
  return Object.keys(myTable).filter(key => myTable[key] === max)
}

function majorityElement(nums) { // Optimal Solution
  let major = nums[0];
  let count = 1;
  for (let i=1; i<nums.length; i++) {
      if (count === 0) {
          count++;
          major = nums[i];
      } else if (major === nums[i]) count++;
      else {
          count--;
      }
  }
  return major;
}