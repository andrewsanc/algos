// Leetcode: https://leetcode.com/problems/univalued-binary-tree/
// Description: A binary tree is univalued if every node in the tree has the same value.
// Return true if and only if the given tree is univalued.

//          1
//         / \
//        1  1
//       / |  \
//      1  1   1

// Input: [1,1,1,1,1,null,1]
// Output: true

function isUnivalTree(root) { // Iterative solution w/ BST
  let queue = [root];
  let compValue = root.val;
  let current;
  while (queue.length > 0) {
      current = queue.shift();
      if (current.val !== compValue) { return false }
      if (current.left) { queue.push(current.left) }
      if (current.right) { queue.push(current.right) }
  }
  return true;
}

