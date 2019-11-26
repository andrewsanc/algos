// Leetcode: https://leetcode.com/problems/find-bottom-left-tree-value/
// Description: Given a binary tree, find the leftmost value in the last row of the tree.
// Example 1:
//     2
//    / \
//   1   3
// Output: 1

// Example 2:
//         1
//        / \
//       2   3
//      /   / \
//     4   5   6
//        /
//       7
// Output: 7

function findBottomLeftValue(root) {
  let queue = [root];
  let results = [];
  while (queue.length > 0) {
    let qSize = queue.length;
    let level = [];
    for (let i = 0; i < qSize; i++) {
      let curr = queue.shift();
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
      level.push(curr.val);
    }
    results.push(level);
  }
  return results[results.length - 1][0];
}
