// Leetcode: https://leetcode.com/problems/n-ary-tree-preorder-traversal/
// Description: Given an n-ary tree, return the preorder traversal of its nodes' values.
// For example, given a 3-ary tree:
//            1
//          / | \
//         3  2  4
//        / \
//       5   6

// Return its preorder traversal as: [1,3,5,6,2,4].

function preorder(root) {
  let results = [];
  dfs(results, root);
  return results;
}

function dfs(array, current) {
  if (current === null) return;
  array.push(current.val);
  for (const child of current.children) {
    dfs(array, child);
  }
}