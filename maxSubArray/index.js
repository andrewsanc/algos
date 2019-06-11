// Leetcode : https://leetcode.com/problems/maximum-subarray
// Description : Given an integer array nums, 
// find the contiguous subarray (containing at least one number) 
// which has the largest sum and return its sum.

// Input : [-2,1,-3,4,-1,2,1,-5,4]
// Output : 6, [4,-1,2,1] = 6

function maxSubArray(nums) {
  if (nums.length === 0) return 0;

  let results = [nums[0]];
  for (let i=1; i<nums.length; i++) {
    if (nums[i] > nums[i] + resultsArr[i-1]) {
        resultsArr.push(nums[i]);
    } else {
        resultsArr.push(nums[i] + resultsArr[i-1]);
    }
  }
  return Math.max(...resultsArr);
}