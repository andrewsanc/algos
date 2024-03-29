// Leetcode: https://leetcode.com/problems/range-sum-of-bst/
// Description: Given the root node of a binary search tree, 
// return the sum of values of all nodes with value between 
// L and R (inclusive).
// The binary search tree is guaranteed to have unique values.

// Example 1:

// Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
// Output: 32
// Example 2:

// Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
// Output: 23

function rangeSumBST(root, L, R) {
  if (root === null) {
    return [];
  }
  let sum = 0;
  let queue = [root];
  let current;

  while (queue.length > 0) {
    current = queue.shift();
    if (current.left !== null) {
        queue.push(current.left);
    }
    if (current.right !== null) {
        queue.push(current.right);
    }
    if (current.val >= L && current.val <= R) {
        sum += current.val;
    }
  }
  return sum;
}