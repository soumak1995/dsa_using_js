

//Time: O(V + E)

//Space: O(V) (recursion stack)

const graph = {
    0: [1, 2],
    1: [0, 3, 4],
    2: [0],
    3: [1],
    4: [1]
  };
  
//DFS for connected Graph 
function dfsTraversal(graph, start) {
    const visited = new Set();
  
    function dfs(node) {
      visited.add(node);
      console.log(node);
  
      for (const neighbor of graph[node]) { 
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    }
  
    dfs(start);
  }

//DFS for Disconnected Graph
  function dfsDisconnected(graph) {
    const visited = new Set();
  
    function dfs(node) {
      visited.add(node);
      console.log(node);
  
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) dfs(neighbor);
      }
    }
  
    for (const node in graph) {
      if (!visited.has(node)) {
        dfs(node);
      }
    }
  }
  
  
  dfsTraversal(graph, 0);
  