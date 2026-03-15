//Time: O(V + E)
//Space: O(V) (recursion + sets)

function hasCycleDirected(graph) {
    const visited = new Set();
    const recStack = new Set();
  
    function dfs(node) {
      visited.add(node);
      recStack.add(node);
  
      for (const neighbor of graph[node]) {
        // Not visited → explore
        if (!visited.has(neighbor)) {
          if (dfs(neighbor)) return true;
        }
        // Back-edge found → cycle
        else if (recStack.has(neighbor)) {
          return true;
        }
      }
  
      // Remove from current DFS path
      recStack.delete(node);
      return false;
    }
  
    // Handle disconnected graph
    for (const node in graph) {
      if (!visited.has(node)) {
        if (dfs(node)) return true;
      }
    }
  
    return false;
  }
  
  const graph = {
    0: [1],
    1: [2],
    2: [0], // cycle: 0 → 1 → 2 → 0
    3: [4],
    4: []
  };
  console.log(hasCycleDirected(graph)); // true
  