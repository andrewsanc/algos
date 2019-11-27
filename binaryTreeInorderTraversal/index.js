// Leetcode: https://leetcode.com/problems/binary-tree-inorder-traversal/
// Description: Given a binary tree, return the inorder traversal of its nodes' values.

// Example:
// Input: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3
// Output: [1,3,2]

function inorderTraversal(root) {
  let results = [];
  function traverse(tree, array) {
    if (tree !== null) {
      traverse(tree.left, array);
      array.push(tree.val);
      traverse(tree.right, array);
    }
    return array;
  }
  traverse(root, results);
  return results;
}
