//Detect A cycle in Undirected Graph using DFS
function hasCycle(graph) {
    const visited = new Set();
  
    function dfs(node, parent) {
      visited.add(node);
  
      for (const neighbor of graph[node]) {
        // If not visited, explore
        if (!visited.has(neighbor)) {
          if (dfs(neighbor, node)) return true;
        }
        // If visited and not parent → cycle
        else if (neighbor !== parent) {
          return true;
        }
      }
      return false;
    }
  
    // Handle disconnected components
    for (const node in graph) {
      if (!visited.has(node)) {
        if (dfs(node, null)) return true;
      }
    }
  
    return false;
  }

  const graph = {
    0: [1, 2],
    1: [0, 2],
    2: [0, 1],
    3: [4],
    4: [3]
  };
  
  console.log(hasCycle(graph)); // true
  

  //Time Complexity: O(V + E)
  //Space Complexity: O(V)