// Leetcode : https://leetcode.com/problems/two-sum/
// Time: O(N) Space: O(N)

function twoSum(nums, target) {
  const myTable = {};
  for (let i=0; i<nums.length; i++) {
    let y = target - nums[i];
    if (y in myTable && y + nums[i] === target) {
      return [myTable[y], i];
    } else {
      myTable[nums[i]] = i;
    }
  }
  return [];
}