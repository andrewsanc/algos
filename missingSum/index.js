function missingNum(nums) {
  let sum = nums.reduce((a, b) => a + b);
  let total = (nums.length + 1) * (nums.length + 2) / 2;
  return total - sum;
}


// Driver code
const numbers = [1,2,4,6,3,7,8]; // 5
const numbers1 = [1,2,3,5]; // 4
console.log(missingNum(numbers));
console.log(missingNum(numbers1));
