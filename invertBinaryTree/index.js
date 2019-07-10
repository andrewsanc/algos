// Leetcode: https://leetcode.com/problems/invert-binary-tree/
// Description: Invert a binary tree.

// Example:
// Input:
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9

// Output:
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

function invertBinaryTreeIte(root) { // Iterative
	const queue = [root];
	while (queue.length) {
		const current = queue.shift();
		if (current === null) continue;
		swapLeftAndRight(current);
		queue.push(current.left);
		queue.push(current.right);
	}
	return root;
}

function invertBinaryTreeRec(root) { // Recursion
  if (root === null) return null; // Base case
  swapLeftAndRight(root);
  invertBinaryTreeRec(root.left);
  invertBinaryTreeRec(root.right);
}

function swapLeftAndRight(tree) { // Function to swap left and right nodes
	const left = tree.left;
	tree.left = tree.right;
	tree.right = left;
}