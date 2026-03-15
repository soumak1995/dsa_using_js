// Problem: Return postorder traversal of a binary tree as an array.
// Implement `postorderTraversal(root)` to collect node values in left-right-root order.
//Time: O(n)
//Space: O(n)
function postorderTraversal(root) {
    const result = [];
  
    function dfs(node) {
      if (!node) return;
  
      dfs(node.left);         // Left
      dfs(node.right);        // Right
      result.push(node.val);  // Root
    }
  
    dfs(root);
    return result;
  }
  


  function postorderTraversalIterative(root) {
    if (!root) return [];
  
    const result = [];
    const stack = [root];
  
    while (stack.length) {
      const node = stack.pop();
      result.push(node.val);
  
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  
    return result.reverse();
  }
  

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
  
  console.log(postorderTraversal(root));
  // [4, 5, 2, 3, 1]
    