// Leetcode : https://leetcode.com/problems/maximum-depth-of-binary-tree
// Description : Given a binary tree, find its maximum depth. 
// The maximum depth is the number of nodes along the longest path 
// from the root node down to the farthest leaf node.
/*
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
  return its depth = 3.
*/

function maxDepth(root) {
  if (root === null) {
    return 0;
  }

  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return Math.max(left, right) + 1;
}