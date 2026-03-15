
  // Problem: Return preorder traversal of a binary tree as an array.
  // Implement `preorderTraversal(root)` to collect node values in root-left-right order.
  function preorderTraversal(root) {
    const result = [];
  
    function dfs(node) {
      if (!node) return;
  
      result.push(node.val); // Root
      dfs(node.left);        // Left
      dfs(node.right);       // Right
    }
  
    dfs(root);
    return result;
  }
  
//-------------------------------------------------------//
class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3)
  );
  
  console.log(preorderTraversal(root)); 
  // [1, 2, 4, 5, 3]
  

  function preorderTraversalIterative(root) {
    if (!root) return [];
  
    const result = [];
    const stack = [root];
  
    while (stack.length) {
      const node = stack.pop();
      result.push(node.val);
  
      // Push right first so left is processed first
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);
    }
  
    return result;
  }
  