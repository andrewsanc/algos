/*
  Iterative solution using Breadth First Search
*/

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

function invertBinaryTreeRec(root) {
  if (root === null) return; // Base case
  swapLeftAndRight(root);
  invertBinaryTreeRec(root.left);
  invertBinaryTreeRec(root.right);
}

function swapLeftAndRight(tree) {
	const left = tree.left;
	tree.left = tree.right;
	tree.right = left;
}