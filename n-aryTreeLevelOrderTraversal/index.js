// Leetcode: https://leetcode.com/problems/n-ary-tree-level-order-traversal/
// Description: Given an n-ary tree, return the level order traversal of its nodes' values.
// Nary-Tree input serialization is represented in their level order traversal,
// each group of children is separated by the null value (See examples).
//            1
//          / | \
//         3  2  4
//        / \
//       5   6
// Input: root = [1, null, 3, 2, 4, null, 5, 6];
// Output: [[1], [3, 2, 4], [5, 6]];

function treeLevelOrderTraversal(root) {
  if (root === null) return [];
  let results = [];
  let queue = [root];

  while (queue.length > 0) {
    let qSize = queue.length;
    let level = [];
    for (let i = 0; i < qSize; i++) {
      let curr = queue.shift();
      level.push(curr.val);
      queue.push(...curr.children);
    }
    results.push(level);
  }
  return results;
}
