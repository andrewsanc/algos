// Leetcode: https://leetcode.com/problems/find-largest-value-in-each-tree-row/
// Description: You need to find the largest value in each row of a binary tree.
// Example:
// Input:
//           1
//          / \
//         3   2
//        / \   \
//       5   3   9
// Output: [1, 3, 9]

function largestValues(root) {
  if (root === null) return [];
  let results = [];
  let queue = [root];
  while (queue.length > 0) {
    let qSize = queue.length;
    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < qSize; i++) {
      let curr = queue.shift();
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
      if (curr.val > max) {
        max = curr.val;
      }
    }
    results.push(max);
  }
  return results;
}
