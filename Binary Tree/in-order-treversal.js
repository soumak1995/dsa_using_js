// Problem: Return inorder traversal of a binary tree as an array.
// Implement `inorderTraversal(root)` to collect node values in left-root-right order.
function inorderTraversal(root) {
    const result = [];
  
    function dfs(node) {
      if (!node) return;
  
      dfs(node.left);        // Left
      result.push(node.val); // Root
      dfs(node.right);       // Right
    }
  
    dfs(root);
    return result;
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
  
  console.log(inorderTraversal(root));
  // [4, 2, 5, 1, 3]
  
  
  
//Time: O(n)

//Space: O(n)


function inorderTraversalIterative(root) {
    const result = [];
    const stack = [];
    let current = root;
  
    while (current || stack.length) {
      // Go as left as possible
      while (current) {
        stack.push(current);
        current = current.left;
      }
  
      current = stack.pop();
      result.push(current.val);
      current = current.right;
    }
  
    return result;
  }
  