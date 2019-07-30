// Leetcode: https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
// Description: Given a n-ary tree, find its maximum depth. The maximum depth is
// the number of nodes along the longest path from the root node down to the farthest leaf node.

// For example, given a 3-ary tree:
//          1
//        / | \
//       2  3  4
//      / \
//     5  6
// We should return its max depth, which is 3

function maxDepth(root) {
  if (root === null) return 0;  
  let queue = [root];
  let depth = 0;
  while (queue.length > 0) {
    let queueSize = queue.length;
    for (let i=0; i<queueSize; i++) {
        let current = queue.shift();
        queue.push(...current.children);
    }
    depth++;
  }
  return depth;
}