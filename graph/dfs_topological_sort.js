//Only valiod in DAG => directed acyclic graph
//Time: O(V + E)
//Space: O(V)
function topoSortDFS(graph) {
    const visited = new Set();
    const stack = [];
  
    function dfs(node) {
      visited.add(node);
  
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
      stack.push(node); // post-order
    }
  
    // Handle disconnected graph
    for (const node in graph) {
      if (!visited.has(node)) {
        dfs(node);
      }
    }
  
    return stack.reverse();
  }
  
  const graph = {
    0: [],
    1: [],
    2: [3],
    3: [1],
    4: [0, 1],
    5: [0, 2]
  };
  
  console.log(topoSortDFS(graph));
  // Example output: [5, 4, 2, 3, 1, 0]
  